# API Test Results
Test Date: Fri Dec 12 09:17:39 AM WIB 2025

### Category Endpoints
## Create Category
`POST /categories`

**Request:**
```bash
curl -X POST http://localhost:3000/api/v1/categories -d '{"name": "Electronics_1765505859"}'
```
**Response:**
```json
{
  "succes": true,
  "message": "Category created successfully",
  "data": {
    "id": "9f900f12-764d-44c2-b682-9a9e42ded096",
    "name": "Electronics_1765505859",
    "createdAt": "2025-12-12T02:17:39.185Z",
    "updatedAt": "2025-12-12T02:17:39.185Z",
    "deletedAt": null
  }
}
```

## Get All Categories
`GET /categories`

**Request:**
```bash
curl -X GET http://localhost:3000/api/v1/categories 
```
**Response:**
```json
{
  "succes": true,
  "message": "Categories fetched successfully",
  "data": [
    {
      "id": "9f900f12-764d-44c2-b682-9a9e42ded096",
      "name": "Electronics_1765505859",
      "createdAt": "2025-12-12T02:17:39.185Z",
      "updatedAt": "2025-12-12T02:17:39.185Z",
      "deletedAt": null
    }
  ]
}
```

## Get Category By ID
`GET /categories/9f900f12-764d-44c2-b682-9a9e42ded096`

**Request:**
```bash
curl -X GET http://localhost:3000/api/v1/categories/9f900f12-764d-44c2-b682-9a9e42ded096 
```
**Response:**
```json
{
  "succes": true,
  "message": "Category fetched successfully",
  "data": {
    "id": "9f900f12-764d-44c2-b682-9a9e42ded096",
    "name": "Electronics_1765505859",
    "createdAt": "2025-12-12T02:17:39.185Z",
    "updatedAt": "2025-12-12T02:17:39.185Z",
    "deletedAt": null
  }
}
```

## Update Category
`PUT /categories/9f900f12-764d-44c2-b682-9a9e42ded096`

**Request:**
```bash
curl -X PUT http://localhost:3000/api/v1/categories/9f900f12-764d-44c2-b682-9a9e42ded096 -d '{"name": "Updated Electronics_1765505859"}'
```
**Response:**
```json
{
  "succes": true,
  "message": "Category updated successfully",
  "data": {
    "id": "9f900f12-764d-44c2-b682-9a9e42ded096",
    "name": "Updated Electronics_1765505859",
    "createdAt": "2025-12-12T02:17:39.185Z",
    "updatedAt": "2025-12-12T02:17:39.298Z",
    "deletedAt": null
  }
}
```

### Store Endpoints
## Create Store
`POST /store`

**Request:**
```bash
curl -X POST http://localhost:3000/api/v1/store -d '{"name": "MegaStore_1765505859", "location": "Jakarta"}'
```
**Response:**
```json
{
  "succes": true,
  "message": "Store created successfully",
  "data": {
    "id": "43f9d0a9-1da3-4c20-b435-c3d7f4f0c98d",
    "name": "MegaStore_1765505859",
    "description": null,
    "location": "Jakarta",
    "createdAt": "2025-12-12T02:17:39.327Z",
    "updatedAt": "2025-12-12T02:17:39.327Z",
    "deletedAt": null
  }
}
```

## Get All Stores
`GET /stores`

**Request:**
```bash
curl -X GET http://localhost:3000/api/v1/stores 
```
**Response:**
```json
{
  "succes": true,
  "message": "Stores fetched successfully",
  "data": [
    {
      "id": "43f9d0a9-1da3-4c20-b435-c3d7f4f0c98d",
      "name": "MegaStore_1765505859",
      "description": null,
      "location": "Jakarta",
      "createdAt": "2025-12-12T02:17:39.327Z",
      "updatedAt": "2025-12-12T02:17:39.327Z",
      "deletedAt": null
    }
  ]
}
```

## Get Store By ID
`GET /store/43f9d0a9-1da3-4c20-b435-c3d7f4f0c98d`

**Request:**
```bash
curl -X GET http://localhost:3000/api/v1/store/43f9d0a9-1da3-4c20-b435-c3d7f4f0c98d 
```
**Response:**
```json
{
  "succes": true,
  "message": "Store fetched successfully",
  "data": {
    "id": "43f9d0a9-1da3-4c20-b435-c3d7f4f0c98d",
    "name": "MegaStore_1765505859",
    "description": null,
    "location": "Jakarta",
    "createdAt": "2025-12-12T02:17:39.327Z",
    "updatedAt": "2025-12-12T02:17:39.327Z",
    "deletedAt": null
  }
}
```

## Update Store
`PUT /store/43f9d0a9-1da3-4c20-b435-c3d7f4f0c98d`

**Request:**
```bash
curl -X PUT http://localhost:3000/api/v1/store/43f9d0a9-1da3-4c20-b435-c3d7f4f0c98d -d '{"name": "Updated MegaStore_1765505859"}'
```
**Response:**
```json
{
  "succes": true,
  "message": "Store updated successfully",
  "data": {
    "id": "43f9d0a9-1da3-4c20-b435-c3d7f4f0c98d",
    "name": "Updated MegaStore_1765505859",
    "description": null,
    "location": "Jakarta",
    "createdAt": "2025-12-12T02:17:39.327Z",
    "updatedAt": "2025-12-12T02:17:39.415Z",
    "deletedAt": null
  }
}
```

### Product Endpoints
## Create Product
`POST /products`

**Request:**
```bash
curl -X POST http://localhost:3000/api/v1/products -d '{"name": "Laptop", "price": 15000000, "stock": 10, "categoryId": "9f900f12-764d-44c2-b682-9a9e42ded096"}'
```
**Response:**
```json
{
  "succes": true,
  "message": "Product created successfully",
  "data": {
    "id": "863fc462-14d6-42e5-aec5-a4d14871c5a1",
    "name": "Laptop",
    "description": null,
    "price": "15000000",
    "stock": 10,
    "categoryId": "9f900f12-764d-44c2-b682-9a9e42ded096",
    "createdAt": "2025-12-12T02:17:39.443Z",
    "updatedAt": "2025-12-12T02:17:39.443Z",
    "deletedAt": null
  }
}
```

## Get All Products
`GET /products`

**Request:**
```bash
curl -X GET http://localhost:3000/api/v1/products 
```
**Response:**
```json
{
  "succes": true,
  "message": "Products fetched successfully",
  "data": [
    {
      "id": "863fc462-14d6-42e5-aec5-a4d14871c5a1",
      "name": "Laptop",
      "description": null,
      "price": "15000000",
      "stock": 10,
      "categoryId": "9f900f12-764d-44c2-b682-9a9e42ded096",
      "createdAt": "2025-12-12T02:17:39.443Z",
      "updatedAt": "2025-12-12T02:17:39.443Z",
      "deletedAt": null
    }
  ]
}
```

## Get Product By ID
`GET /products/863fc462-14d6-42e5-aec5-a4d14871c5a1`

**Request:**
```bash
curl -X GET http://localhost:3000/api/v1/products/863fc462-14d6-42e5-aec5-a4d14871c5a1 
```
**Response:**
```json
{
  "succes": true,
  "message": "Product fetched successfully",
  "data": {
    "id": "863fc462-14d6-42e5-aec5-a4d14871c5a1",
    "name": "Laptop",
    "description": null,
    "price": "15000000",
    "stock": 10,
    "categoryId": "9f900f12-764d-44c2-b682-9a9e42ded096",
    "createdAt": "2025-12-12T02:17:39.443Z",
    "updatedAt": "2025-12-12T02:17:39.443Z",
    "deletedAt": null
  }
}
```

## Update Product
`PUT /products/863fc462-14d6-42e5-aec5-a4d14871c5a1`

**Request:**
```bash
curl -X PUT http://localhost:3000/api/v1/products/863fc462-14d6-42e5-aec5-a4d14871c5a1 -d '{"name": "Laptop Pro", "price": 16000000}'
```
**Response:**
```json
{
  "succes": true,
  "message": "Product updated successfully",
  "data": {
    "id": "863fc462-14d6-42e5-aec5-a4d14871c5a1",
    "name": "Laptop Pro",
    "description": null,
    "price": "16000000",
    "stock": 10,
    "categoryId": "9f900f12-764d-44c2-b682-9a9e42ded096",
    "createdAt": "2025-12-12T02:17:39.443Z",
    "updatedAt": "2025-12-12T02:17:39.534Z",
    "deletedAt": null
  }
}
```

## Delete Product
`DELETE /products/863fc462-14d6-42e5-aec5-a4d14871c5a1`

**Request:**
```bash
curl -X DELETE http://localhost:3000/api/v1/products/863fc462-14d6-42e5-aec5-a4d14871c5a1 
```
**Response:**
```json
{
  "succes": true,
  "message": "Product deleted successfully",
  "data": {
    "id": "863fc462-14d6-42e5-aec5-a4d14871c5a1",
    "name": "Laptop Pro",
    "description": null,
    "price": "16000000",
    "stock": 10,
    "categoryId": "9f900f12-764d-44c2-b682-9a9e42ded096",
    "createdAt": "2025-12-12T02:17:39.443Z",
    "updatedAt": "2025-12-12T02:17:39.558Z",
    "deletedAt": "2025-12-12T02:17:39.556Z"
  }
}
```

## Delete Category
`DELETE /categories/9f900f12-764d-44c2-b682-9a9e42ded096`

**Request:**
```bash
curl -X DELETE http://localhost:3000/api/v1/categories/9f900f12-764d-44c2-b682-9a9e42ded096 
```
**Response:**
```json
{
  "succes": true,
  "message": "Category deleted successfully",
  "data": {
    "id": "9f900f12-764d-44c2-b682-9a9e42ded096",
    "name": "Updated Electronics_1765505859",
    "createdAt": "2025-12-12T02:17:39.185Z",
    "updatedAt": "2025-12-12T02:17:39.584Z",
    "deletedAt": "2025-12-12T02:17:39.582Z"
  }
}
```

## Delete Store
`DELETE /store/43f9d0a9-1da3-4c20-b435-c3d7f4f0c98d`

**Request:**
```bash
curl -X DELETE http://localhost:3000/api/v1/store/43f9d0a9-1da3-4c20-b435-c3d7f4f0c98d 
```
**Response:**
```json
{
  "succes": true,
  "message": "Store deleted successfully",
  "data": {
    "id": "43f9d0a9-1da3-4c20-b435-c3d7f4f0c98d",
    "name": "Updated MegaStore_1765505859",
    "description": null,
    "location": "Jakarta",
    "createdAt": "2025-12-12T02:17:39.327Z",
    "updatedAt": "2025-12-12T02:17:39.415Z",
    "deletedAt": null
  }
}
```

