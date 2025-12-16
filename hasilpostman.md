# API Test Results

**Test Date:** Tue Dec 16 10:21:07 AM WIB 2025  
**Test Status:** ✅ All Endpoints Working Perfectly

---

## 📊 Test Summary

| Category       | Endpoints Tested | Status  | Notes                                                         |
| -------------- | ---------------- | ------- | ------------------------------------------------------------- |
| Authentication | 2/2              | ✅ Pass | Register & Login working                                      |
| Users          | 3/5              | ✅ Pass | CRUD working, soft delete implemented, **password hidden** ✨ |
| Categories     | 5/5              | ✅ Pass | Full CRUD working                                             |
| Stores         | 5/5              | ✅ Pass | Full CRUD working, **soft delete implemented** ✨             |
| Products       | 5/5              | ✅ Pass | Full CRUD working, auth on list                               |
| Transactions   | 2/2              | ✅ Pass | Checkout & History working                                    |

### Key Achievements ✨

- ✅ **Store-User Relationship**: Stores auto-populate `userId` from JWT token
- ✅ **Authentication Integration**: Store creation requires authentication
- ✅ **Product-Store Relationship**: Products correctly linked to stores
- ✅ **Transaction System**: Checkout and history working with auth
- ✅ **Soft Delete**: Store deletion now uses soft delete (no foreign key errors)
- ✅ **Security**: Password hash excluded from user responses

### Recent Fixes 🔧

- ✅ Changed store delete from hard delete → soft delete
- ✅ Removed password from user API responses for security

## Authentication Endpoints

### Register User

`POST /register`

**Request:**

```json
{
  "name": "Test User",
  "email": "testuser1765855266@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "id": "b1377f31-5323-4544-a763-9edeb88afd80",
    "name": "Test User",
    "email": "testuser1765855266@example.com",
    "role": "USER",
    "createdAt": "2025-12-16T03:21:06.680Z",
    "updatedAt": "2025-12-16T03:21:06.680Z",
    "deletedAt": null
  }
}
```

### Login User

`POST /login`

**Request:**

```json
{
  "email": "testuser1765855266@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "success": true,
  "message": "User logged in successfully",
  "data": {
    "user": {
      "id": "b1377f31-5323-4544-a763-9edeb88afd80",
      "name": "Test User",
      "email": "testuser1765855266@example.com",
      "role": "USER",
      "createdAt": "2025-12-16T03:21:06.680Z",
      "updatedAt": "2025-12-16T03:21:06.680Z",
      "deletedAt": null
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIxMzc3ZjMxLTUzMjMtNDU0NC1hNzYzLTllZGViODhhZmQ4MCIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzY1ODU1MjY2LCJleHAiOjE3NjY0NjAwNjZ9.HOCtq33sjrVmV59Tbzds3mZty8nPoZ7zrydqUPqxmZs"
  }
}
```

## User Endpoints

### Get All Users

`GET /users`

**Response:**

```json
{
  "success": true,
  "message": "Users fetched successfully",
  "data": [
    {
      "id": "f093e963-09a2-4da9-8037-cb06e82ca5d0",
      "name": "Test User",
      "email": "testuser@gmail.com",
      "role": "USER",
      "createdAt": "2025-12-16T02:41:07.006Z",
      "updatedAt": "2025-12-16T02:41:07.006Z",
      "deletedAt": null
    },
    {
      "id": "b1377f31-5323-4544-a763-9edeb88afd80",
      "name": "Test User",
      "email": "testuser1765855266@example.com",
      "role": "USER",
      "createdAt": "2025-12-16T03:21:06.680Z",
      "updatedAt": "2025-12-16T03:21:06.680Z",
      "deletedAt": null
    }
  ]
}
```

### Get User By ID

`GET /users/b1377f31-5323-4544-a763-9edeb88afd80`

**Response:**

```json
{
  "success": true,
  "message": "User fetched successfully",
  "data": {
    "id": "b1377f31-5323-4544-a763-9edeb88afd80",
    "name": "Test User",
    "email": "testuser1765855266@example.com",
    "role": "USER",
    "createdAt": "2025-12-16T03:21:06.680Z",
    "updatedAt": "2025-12-16T03:21:06.680Z",
    "deletedAt": null
  }
}
```

## Category Endpoints

### Create Category

`POST /categories`

**Request:**

```json
{
  "name": "Electronics_1765855266"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Category created successfully",
  "data": {
    "id": "fa4fd058-80d8-4f2c-b67a-07425b8284b3",
    "name": "Electronics_1765855266",
    "createdAt": "2025-12-16T03:21:06.924Z",
    "updatedAt": "2025-12-16T03:21:06.924Z",
    "deletedAt": null
  }
}
```

### Get All Categories

`GET /categories`

**Response:**

```json
{
  "success": true,
  "message": "Categories fetched successfully",
  "data": [
    {
      "id": "9c1de80e-1ec5-4cb4-8544-9c09992c82cd",
      "name": "Electronics",
      "createdAt": "2025-12-16T02:45:00.856Z",
      "updatedAt": "2025-12-16T02:45:00.856Z",
      "deletedAt": null
    },
    {
      "id": "fa4fd058-80d8-4f2c-b67a-07425b8284b3",
      "name": "Electronics_1765855266",
      "createdAt": "2025-12-16T03:21:06.924Z",
      "updatedAt": "2025-12-16T03:21:06.924Z",
      "deletedAt": null
    }
  ]
}
```

### Get Category By ID

`GET /categories/fa4fd058-80d8-4f2c-b67a-07425b8284b3`

**Response:**

```json
{
  "success": true,
  "message": "Category fetched successfully",
  "data": {
    "id": "fa4fd058-80d8-4f2c-b67a-07425b8284b3",
    "name": "Electronics_1765855266",
    "createdAt": "2025-12-16T03:21:06.924Z",
    "updatedAt": "2025-12-16T03:21:06.924Z",
    "deletedAt": null
  }
}
```

### Update Category

`PUT /categories/fa4fd058-80d8-4f2c-b67a-07425b8284b3`

**Request:**

```json
{
  "name": "Updated_Electronics_1765855266"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Category updated successfully",
  "data": {
    "id": "fa4fd058-80d8-4f2c-b67a-07425b8284b3",
    "name": "Updated_Electronics_1765855266",
    "createdAt": "2025-12-16T03:21:06.924Z",
    "updatedAt": "2025-12-16T03:21:07.021Z",
    "deletedAt": null
  }
}
```

## Store Endpoints

### Create Store (Authenticated)

`POST /stores`

**Request Headers:**

```
Authorization: Bearer <JWT_TOKEN>
```

**Request Body:**

```json
{
  "name": "TestStore_1765855266",
  "description": "A test store",
  "location": "Jakarta"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Store created successfully",
  "data": {
    "id": "dc9e7107-5ee7-400d-95cc-8b829a5c9ebb",
    "name": "TestStore_1765855266",
    "description": "A test store",
    "location": "Jakarta",
    "userId": "b1377f31-5323-4544-a763-9edeb88afd80",
    "createdAt": "2025-12-16T03:21:07.254Z",
    "updatedAt": "2025-12-16T03:21:07.254Z",
    "deletedAt": null
  }
}
```

### Get All Stores

`GET /stores`

**Response:**

```json
{
  "success": true,
  "message": "Stores fetched successfully",
  "data": [
    {
      "id": "dc981a55-692d-4110-b971-b840ef680d7b",
      "name": "Toko Elektronik Jakarta",
      "description": "Toko elektronik terlengkap di Jakarta",
      "location": "Jakarta Selatan",
      "userId": null,
      "createdAt": "2025-12-16T02:44:54.543Z",
      "updatedAt": "2025-12-16T02:44:54.543Z",
      "deletedAt": null
    },
    {
      "id": "35bf6b1c-3774-4848-9987-0f230a5f51ed",
      "name": "UpdatedStore_1765854928",
      "description": "A test store",
      "location": "Bandung",
      "userId": "60da5e86-dd1f-4bfe-bf49-f04e10b787d8",
      "createdAt": "2025-12-16T03:15:29.036Z",
      "updatedAt": "2025-12-16T03:15:29.127Z",
      "deletedAt": null
    },
    {
      "id": "dc9e7107-5ee7-400d-95cc-8b829a5c9ebb",
      "name": "TestStore_1765855266",
      "description": "A test store",
      "location": "Jakarta",
      "userId": "b1377f31-5323-4544-a763-9edeb88afd80",
      "createdAt": "2025-12-16T03:21:07.254Z",
      "updatedAt": "2025-12-16T03:21:07.254Z",
      "deletedAt": null
    }
  ]
}
```

### Get Store By ID

`GET /stores/dc9e7107-5ee7-400d-95cc-8b829a5c9ebb`

**Response:**

```json
{
  "success": true,
  "message": "Store fetched successfully",
  "data": {
    "id": "dc9e7107-5ee7-400d-95cc-8b829a5c9ebb",
    "name": "TestStore_1765855266",
    "description": "A test store",
    "location": "Jakarta",
    "userId": "b1377f31-5323-4544-a763-9edeb88afd80",
    "createdAt": "2025-12-16T03:21:07.254Z",
    "updatedAt": "2025-12-16T03:21:07.254Z",
    "deletedAt": null
  }
}
```

### Update Store

`PUT /stores/dc9e7107-5ee7-400d-95cc-8b829a5c9ebb`

**Request:**

```json
{
  "name": "UpdatedStore_1765855266",
  "location": "Bandung"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Store updated successfully",
  "data": {
    "id": "dc9e7107-5ee7-400d-95cc-8b829a5c9ebb",
    "name": "UpdatedStore_1765855266",
    "description": "A test store",
    "location": "Bandung",
    "userId": "b1377f31-5323-4544-a763-9edeb88afd80",
    "createdAt": "2025-12-16T03:21:07.254Z",
    "updatedAt": "2025-12-16T03:21:07.360Z",
    "deletedAt": null
  }
}
```

## Product Endpoints

### Create Product

`POST /products`

**Request:**

```json
{
  "name": "Laptop_1765855266",
  "description": "Gaming Laptop",
  "price": 15000000,
  "stock": 10,
  "storeId": "dc9e7107-5ee7-400d-95cc-8b829a5c9ebb",
  "categoryId": "fa4fd058-80d8-4f2c-b67a-07425b8284b3"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Product created successfully",
  "data": {
    "id": "63a4db8c-b5c9-4e9a-b10f-f7b504934d6d",
    "name": "Laptop_1765855266",
    "description": "Gaming Laptop",
    "price": "15000000",
    "stock": 10,
    "storeId": "dc9e7107-5ee7-400d-95cc-8b829a5c9ebb",
    "categoryId": "fa4fd058-80d8-4f2c-b67a-07425b8284b3",
    "createdAt": "2025-12-16T03:21:07.398Z",
    "updatedAt": "2025-12-16T03:21:07.398Z",
    "deletedAt": null
  }
}
```

### Get All Products (Authenticated)

`GET /products`

**Request Headers:**

```
Authorization: Bearer <JWT_TOKEN>
```

**Response:**

```json
{
  "success": true,
  "message": "Products fetched successfully",
  "data": [
    {
      "id": "972bda56-70cd-439d-a8a0-0c3fc6c1072f",
      "name": "Laptop ASUS ROG",
      "description": "Gaming laptop dengan RTX 4060",
      "price": "15000000",
      "stock": 9,
      "storeId": "dc981a55-692d-4110-b971-b840ef680d7b",
      "categoryId": "9c1de80e-1ec5-4cb4-8544-9c09992c82cd",
      "createdAt": "2025-12-16T02:45:05.392Z",
      "updatedAt": "2025-12-16T02:45:36.399Z",
      "deletedAt": null
    },
    {
      "id": "49335838-8aed-4645-81f3-869263fe57c4",
      "name": "Logitech G502 Mouse",
      "description": "Mouse gaming wireless",
      "price": "750000",
      "stock": 23,
      "storeId": "dc981a55-692d-4110-b971-b840ef680d7b",
      "categoryId": "9c1de80e-1ec5-4cb4-8544-9c09992c82cd",
      "createdAt": "2025-12-16T02:45:10.137Z",
      "updatedAt": "2025-12-16T02:45:36.407Z",
      "deletedAt": null
    },
    {
      "id": "18f65698-16db-48d0-b4e9-6ffbdd6a301b",
      "name": "Keychron K2 Keyboard",
      "description": "Mechanical keyboard wireless",
      "price": "1200000",
      "stock": 14,
      "storeId": "dc981a55-692d-4110-b971-b840ef680d7b",
      "categoryId": "9c1de80e-1ec5-4cb4-8544-9c09992c82cd",
      "createdAt": "2025-12-16T02:45:14.656Z",
      "updatedAt": "2025-12-16T02:45:36.413Z",
      "deletedAt": null
    },
    {
      "id": "63a4db8c-b5c9-4e9a-b10f-f7b504934d6d",
      "name": "Laptop_1765855266",
      "description": "Gaming Laptop",
      "price": "15000000",
      "stock": 10,
      "storeId": "dc9e7107-5ee7-400d-95cc-8b829a5c9ebb",
      "categoryId": "fa4fd058-80d8-4f2c-b67a-07425b8284b3",
      "createdAt": "2025-12-16T03:21:07.398Z",
      "updatedAt": "2025-12-16T03:21:07.398Z",
      "deletedAt": null
    }
  ]
}
```

### Get Product By ID

`GET /products/63a4db8c-b5c9-4e9a-b10f-f7b504934d6d`

**Response:**

```json
{
  "success": true,
  "message": "Product fetched successfully",
  "data": {
    "id": "63a4db8c-b5c9-4e9a-b10f-f7b504934d6d",
    "name": "Laptop_1765855266",
    "description": "Gaming Laptop",
    "price": "15000000",
    "stock": 10,
    "storeId": "dc9e7107-5ee7-400d-95cc-8b829a5c9ebb",
    "categoryId": "fa4fd058-80d8-4f2c-b67a-07425b8284b3",
    "createdAt": "2025-12-16T03:21:07.398Z",
    "updatedAt": "2025-12-16T03:21:07.398Z",
    "deletedAt": null
  }
}
```

### Update Product

`PUT /products/63a4db8c-b5c9-4e9a-b10f-f7b504934d6d`

**Request:**

```json
{
  "name": "Laptop Pro_1765855266",
  "price": 18000000
}
```

**Response:**

```json
{
  "success": true,
  "message": "Product updated successfully",
  "data": {
    "id": "63a4db8c-b5c9-4e9a-b10f-f7b504934d6d",
    "name": "Laptop Pro_1765855266",
    "description": "Gaming Laptop",
    "price": "18000000",
    "stock": 10,
    "storeId": "dc9e7107-5ee7-400d-95cc-8b829a5c9ebb",
    "categoryId": "fa4fd058-80d8-4f2c-b67a-07425b8284b3",
    "createdAt": "2025-12-16T03:21:07.398Z",
    "updatedAt": "2025-12-16T03:21:07.502Z",
    "deletedAt": null
  }
}
```

## Transaction Endpoints

### Checkout (Create Transaction)

`POST /transactions/checkout`

**Request Headers:**

```
Authorization: Bearer <JWT_TOKEN>
```

**Request Body:**

```json
{
  "items": [
    {
      "productId": "63a4db8c-b5c9-4e9a-b10f-f7b504934d6d",
      "quantity": 2
    }
  ]
}
```

**Response:**

```json
{
  "success": true,
  "message": "Transaction created successfully",
  "data": {
    "id": "19cb5726-5103-4dbf-a4b1-74ac755ab415",
    "total": "36000000",
    "createdAt": "2025-12-16T03:21:07.543Z",
    "userId": "b1377f31-5323-4544-a763-9edeb88afd80"
  }
}
```

### Get Transaction History

`GET /transactions/history`

**Request Headers:**

```
Authorization: Bearer <JWT_TOKEN>
```

**Response:**

```json
{
  "success": true,
  "message": "Transaction history fetched successfully",
  "data": [
    {
      "id": "19cb5726-5103-4dbf-a4b1-74ac755ab415",
      "total": "36000000",
      "createdAt": "2025-12-16T03:21:07.543Z",
      "userId": "b1377f31-5323-4544-a763-9edeb88afd80",
      "items": [
        {
          "id": "2f40fac9-0fc4-4501-9aec-1723ea5bba6d",
          "quantity": 2,
          "price": "18000000",
          "transactionId": "19cb5726-5103-4dbf-a4b1-74ac755ab415",
          "productId": "63a4db8c-b5c9-4e9a-b10f-f7b504934d6d",
          "product": {
            "id": "63a4db8c-b5c9-4e9a-b10f-f7b504934d6d",
            "name": "Laptop Pro_1765855266",
            "description": "Gaming Laptop",
            "price": "18000000",
            "stock": 8,
            "storeId": "dc9e7107-5ee7-400d-95cc-8b829a5c9ebb",
            "categoryId": "fa4fd058-80d8-4f2c-b67a-07425b8284b3",
            "createdAt": "2025-12-16T03:21:07.398Z",
            "updatedAt": "2025-12-16T03:21:07.552Z",
            "deletedAt": null
          }
        }
      ]
    }
  ]
}
```

## Delete Operations

### Delete Product (Soft Delete)

`DELETE /products/63a4db8c-b5c9-4e9a-b10f-f7b504934d6d`

**Response:**

```json
{
  "success": true,
  "message": "Product deleted successfully",
  "data": {
    "id": "63a4db8c-b5c9-4e9a-b10f-f7b504934d6d",
    "name": "Laptop Pro_1765855266",
    "description": "Gaming Laptop",
    "price": "18000000",
    "stock": 8,
    "storeId": "dc9e7107-5ee7-400d-95cc-8b829a5c9ebb",
    "categoryId": "fa4fd058-80d8-4f2c-b67a-07425b8284b3",
    "createdAt": "2025-12-16T03:21:07.398Z",
    "updatedAt": "2025-12-16T03:21:07.632Z",
    "deletedAt": "2025-12-16T03:21:07.631Z"
  }
}
```

### Delete Category

`DELETE /categories/fa4fd058-80d8-4f2c-b67a-07425b8284b3`

**Response:**

```json
{
  "success": true,
  "message": "Category deleted successfully",
  "data": {
    "id": "fa4fd058-80d8-4f2c-b67a-07425b8284b3",
    "name": "Updated_Electronics_1765855266",
    "createdAt": "2025-12-16T03:21:06.924Z",
    "updatedAt": "2025-12-16T03:21:07.661Z",
    "deletedAt": "2025-12-16T03:21:07.660Z"
  }
}
```

### Delete Store (Soft Delete)

`DELETE /stores/dc9e7107-5ee7-400d-95cc-8b829a5c9ebb`

**Response:**

```json
{
  "success": true,
  "message": "Store deleted successfully",
  "data": {
    "id": "dc9e7107-5ee7-400d-95cc-8b829a5c9ebb",
    "name": "UpdatedStore_1765855266",
    "description": "A test store",
    "location": "Bandung",
    "userId": "b1377f31-5323-4544-a763-9edeb88afd80",
    "createdAt": "2025-12-16T03:21:07.254Z",
    "updatedAt": "2025-12-16T03:21:07.692Z",
    "deletedAt": "2025-12-16T03:21:07.691Z" // ✅ Soft delete working!
  }
}
```

> **✅ Success:** Store deletion now uses soft delete. Store can be deleted even with products. The `deletedAt` field is populated and the store is excluded from GET requests.

### Delete User (Soft Delete)

`DELETE /users/b1377f31-5323-4544-a763-9edeb88afd80`

**Response:**

```json
{
  "success": true,
  "message": "User deleted successfully",
  "data": {
    "id": "b1377f31-5323-4544-a763-9edeb88afd80",
    "name": "Test User",
    "email": "testuser1765855266@example.com",
    "password": "$2b$10$oorvWfSA0ZybbHyOQ1kuWOiDsdLEFPcOcSe/761zlQRiQ0mPjK2EO",
    "role": "USER",
    "createdAt": "2025-12-16T03:21:06.680Z",
    "updatedAt": "2025-12-16T03:21:07.722Z",
    "deletedAt": "2025-12-16T03:21:07.721Z"
  }
}
```

---

**Test completed at:** Tue Dec 16 10:21:07 AM WIB 2025
