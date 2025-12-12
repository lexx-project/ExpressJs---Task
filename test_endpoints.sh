#!/bin/bash
BASE_URL="http://localhost:3000/api/v1"
OUTPUT_FILE="hasilpostman.md"

echo "# API Test Results" > $OUTPUT_FILE
echo "Test Date: $(date)" >> $OUTPUT_FILE
echo "" >> $OUTPUT_FILE

log_req() {
    echo "## $1" >> $OUTPUT_FILE
    echo "\`$2 $3\`" >> $OUTPUT_FILE
    echo "" >> $OUTPUT_FILE
    echo "**Request:**" >> $OUTPUT_FILE
    echo "\`\`\`bash" >> $OUTPUT_FILE
    echo "curl -X $2 $BASE_URL$3 $4" >> $OUTPUT_FILE
    echo "\`\`\`" >> $OUTPUT_FILE
}

log_res() {
    echo "**Response:**" >> $OUTPUT_FILE
    echo "\`\`\`json" >> $OUTPUT_FILE
    (echo "$1" | jq . 2>/dev/null || echo "$1") >> $OUTPUT_FILE
    echo "\`\`\`" >> $OUTPUT_FILE
    echo "" >> $OUTPUT_FILE
}

# --- CATEGORY ---
echo "Testing Categories..."
echo "### Category Endpoints" >> $OUTPUT_FILE

# 1. Create Category
DATA='{"name": "Electronics_'$(date +%s)'"}'
log_req "Create Category" "POST" "/categories" "-d '$DATA'"
RESP=$(curl -s -X POST "$BASE_URL/categories" -H "Content-Type: application/json" -d "$DATA")
log_res "$RESP"
CAT_ID=$(echo "$RESP" | jq -r '.data.id // empty')

# 2. Get All Categories
log_req "Get All Categories" "GET" "/categories" ""
RESP=$(curl -s -X GET "$BASE_URL/categories")
log_res "$RESP"

# 3. Get Category By ID
if [ ! -z "$CAT_ID" ]; then
    log_req "Get Category By ID" "GET" "/categories/$CAT_ID" ""
    RESP=$(curl -s -X GET "$BASE_URL/categories/$CAT_ID")
    log_res "$RESP"
    
    # 4. Update Category
    DATA='{"name": "Updated Electronics_'$(date +%s)'"}'
    log_req "Update Category" "PUT" "/categories/$CAT_ID" "-d '$DATA'"
    RESP=$(curl -s -X PUT "$BASE_URL/categories/$CAT_ID" -H "Content-Type: application/json" -d "$DATA")
    log_res "$RESP"
fi

# --- STORE ---
echo "Testing Stores..."
echo "### Store Endpoints" >> $OUTPUT_FILE

# 5. Create Store
DATA='{"name": "MegaStore_'$(date +%s)'", "location": "Jakarta"}'
log_req "Create Store" "POST" "/store" "-d '$DATA'"
RESP=$(curl -s -X POST "$BASE_URL/store" -H "Content-Type: application/json" -d "$DATA")
log_res "$RESP"
STORE_ID=$(echo "$RESP" | jq -r '.data.id // empty')

# 6. Get All Stores
log_req "Get All Stores" "GET" "/stores" ""
RESP=$(curl -s -X GET "$BASE_URL/stores")
log_res "$RESP"

# 7. Get Store By ID
if [ ! -z "$STORE_ID" ]; then
    log_req "Get Store By ID" "GET" "/store/$STORE_ID" ""
    RESP=$(curl -s -X GET "$BASE_URL/store/$STORE_ID")
    log_res "$RESP"
    
    # 8. Update Store
    DATA='{"name": "Updated MegaStore_'$(date +%s)'"}'
    log_req "Update Store" "PUT" "/store/$STORE_ID" "-d '$DATA'"
    RESP=$(curl -s -X PUT "$BASE_URL/store/$STORE_ID" -H "Content-Type: application/json" -d "$DATA")
    log_res "$RESP"
fi

# --- PRODUCT ---
echo "Testing Products..."
echo "### Product Endpoints" >> $OUTPUT_FILE

if [ ! -z "$CAT_ID" ]; then
    # 9. Create Product
    DATA='{"name": "Laptop", "price": 15000000, "stock": 10, "categoryId": "'$CAT_ID'"}'
    log_req "Create Product" "POST" "/products" "-d '$DATA'"
    RESP=$(curl -s -X POST "$BASE_URL/products" -H "Content-Type: application/json" -d "$DATA")
    log_res "$RESP"
    PROD_ID=$(echo "$RESP" | jq -r '.data.id // empty')
    
    # 10. Get All Products
    log_req "Get All Products" "GET" "/products" ""
    RESP=$(curl -s -X GET "$BASE_URL/products")
    log_res "$RESP"
    
    # 11. Get Product By ID
    if [ ! -z "$PROD_ID" ]; then
        log_req "Get Product By ID" "GET" "/products/$PROD_ID" ""
        RESP=$(curl -s -X GET "$BASE_URL/products/$PROD_ID")
        log_res "$RESP"
        
        # 12. Update Product
        DATA='{"name": "Laptop Pro", "price": 16000000}'
        log_req "Update Product" "PUT" "/products/$PROD_ID" "-d '$DATA'"
        RESP=$(curl -s -X PUT "$BASE_URL/products/$PROD_ID" -H "Content-Type: application/json" -d "$DATA")
        log_res "$RESP"
        
        # 13. Delete Product
        log_req "Delete Product" "DELETE" "/products/$PROD_ID" ""
        RESP=$(curl -s -X DELETE "$BASE_URL/products/$PROD_ID")
        log_res "$RESP"
    fi
fi

# Clean up Category and Store
if [ ! -z "$CAT_ID" ]; then
    log_req "Delete Category" "DELETE" "/categories/$CAT_ID" ""
    RESP=$(curl -s -X DELETE "$BASE_URL/categories/$CAT_ID")
    log_res "$RESP"
fi

if [ ! -z "$STORE_ID" ]; then
    log_req "Delete Store" "DELETE" "/store/$STORE_ID" ""
    RESP=$(curl -s -X DELETE "$BASE_URL/store/$STORE_ID")
    log_res "$RESP"
fi

echo "Done."
