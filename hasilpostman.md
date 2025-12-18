# API Endpoint Testing Results

> **Base URL**: `http://localhost:3000/api/v1`  
> **Test Date**: December 18, 2025  
> **Status**: ✅ All endpoints tested successfully

---

## 🔐 Authentication Endpoints

### 1. Register User

**POST** `/register`

**Request Body:**

```json
{
  "email": "test@example.com",
  "password": "123456",
  "name": "Test User"
}
```

**Response (201):**

```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "id": "dc408b58-b01f-427e-8dfd-92a282d3e7e6",
    "name": "Test User",
    "email": "test@example.com",
    "role": "USER",
    "createdAt": "2025-12-18T02:12:16.534Z",
    "updatedAt": "2025-12-18T02:12:16.534Z",
    "deletedAt": null
  }
}
```

---

### 2. Login User

**POST** `/login`

**Request Body:**

```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

**Response (200):**

```json
{
  "success": true,
  "message": "User logged in successfully",
  "data": {
    "user": {
      "id": "dc408b58-b01f-427e-8dfd-92a282d3e7e6",
      "name": "Test User",
      "email": "test@example.com",
      "role": "USER",
      "createdAt": "2025-12-18T02:12:16.534Z",
      "updatedAt": "2025-12-18T02:12:16.534Z",
      "deletedAt": null
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

---

## 📦 Product Endpoints (Paginated)

### 3. Get All Products (Default Pagination)

**GET** `/products`  
**Auth Required**: ✅ Bearer Token

**Response (200):**

```json
{
  "success": true,
  "message": "Products fetched successfully",
  "data": [
    {
      "id": "16b0bb6c-cceb-4fb8-b5f6-74eabf4a4554",
      "name": "Gaming Chair #100",
      "description": "Great value for money - Product variant 100",
      "price": "972537.94",
      "stock": 77,
      "image": null,
      "storeId": "6a4675c4-839d-496a-ba81-0b4410b28380",
      "categoryId": "a22a683f-9058-4781-ae5c-a0b4dbdfd039",
      "createdAt": "2025-12-18T01:35:18.833Z",
      "updatedAt": "2025-12-18T01:35:18.833Z",
      "deletedAt": null,
      "category": {
        "id": "a22a683f-9058-4781-ae5c-a0b4dbdfd039",
        "name": "Electronics",
        "createdAt": "2025-12-17T02:05:41.895Z",
        "updatedAt": "2025-12-17T02:05:41.895Z",
        "deletedAt": null
      }
    }
    // ... 9 more items
  ],
  "pagination": {
    "totalItems": 100,
    "totalPages": 10,
    "currentPage": 1
  }
}
```

---

### 4. Get Products with Custom Pagination

**GET** `/products?page=1&limit=5`  
**Auth Required**: ✅ Bearer Token

**Query Parameters:**

- `page`: 1 (default: 1)
- `limit`: 5 (default: 10)
- `search`: optional search term
- `sortBy`: optional field to sort by
- `sortOrder`: `asc` or `desc` (default: desc)

**Response (200):**

```json
{
  "success": true,
  "message": "Products fetched successfully",
  "data": [
    // Array of 5 products
  ],
  "pagination": {
    "totalItems": 100,
    "totalPages": 20,
    "currentPage": 1
  }
}
```

---

## 🏷️ Category Endpoints (Paginated)

### 5. Get All Categories (Default Pagination)

**GET** `/categories`

**Response (200):**

```json
{
  "success": true,
  "message": "Categories fetched successfully",
  "data": [
    {
      "id": "6f08ce89-7625-4678-b370-7a986272ee9b",
      "name": "Food & Beverages",
      "createdAt": "2025-12-18T01:35:18.175Z",
      "updatedAt": "2025-12-18T01:35:18.175Z",
      "deletedAt": null
    },
    {
      "id": "3512e133-6a14-490d-9da7-fa1dc23f7635",
      "name": "Health & Beauty",
      "createdAt": "2025-12-18T01:35:18.162Z",
      "updatedAt": "2025-12-18T01:35:18.162Z",
      "deletedAt": null
    }
    // ... 6 more categories
  ],
  "pagination": {
    "totalItems": 8,
    "totalPages": 1,
    "currentPage": 1
  }
}
```

---

### 6. Get Categories with Pagination

**GET** `/categories?page=1&limit=5`

**Query Parameters:**

- `page`: 1
- `limit`: 5
- `search`: optional
- `sortBy`: optional
- `sortOrder`: `asc` or `desc`

**Response (200):**

```json
{
  "success": true,
  "message": "Categories fetched successfully",
  "data": [
    // Array of 5 categories
  ],
  "pagination": {
    "totalItems": 8,
    "totalPages": 2,
    "currentPage": 1
  }
}
```

---

## 🏪 Store Endpoints (Paginated)

### 7. Get All Stores (Default Pagination)

**GET** `/stores`

**Response (200):**

```json
{
  "success": true,
  "message": "Stores fetched successfully",
  "data": [
    {
      "id": "975dccca-1930-413c-ac8d-d01ad37ce666",
      "name": "Book Haven",
      "description": "Books for every reader",
      "location": "Medan",
      "userId": null,
      "createdAt": "2025-12-18T01:35:18.292Z",
      "updatedAt": "2025-12-18T01:35:18.292Z",
      "deletedAt": null
    },
    {
      "id": "6a4675c4-839d-496a-ba81-0b4410b28380",
      "name": "Sports World",
      "description": "Sports equipment and gear",
      "location": "Yogyakarta",
      "userId": null,
      "createdAt": "2025-12-18T01:35:18.286Z",
      "updatedAt": "2025-12-18T01:35:18.286Z",
      "deletedAt": null
    }
    // ... 4 more stores
  ],
  "pagination": {
    "totalItems": 6,
    "totalPages": 1,
    "currentPage": 1
  }
}
```

---

### 8. Get Stores with Pagination

**GET** `/stores?page=1&limit=3`

**Query Parameters:**

- `page`: 1
- `limit`: 3
- `search`: optional
- `sortBy`: optional
- `sortOrder`: `asc` or `desc`

**Response (200):**

```json
{
  "success": true,
  "message": "Stores fetched successfully",
  "data": [
    // Array of 3 stores
  ],
  "pagination": {
    "totalItems": 6,
    "totalPages": 2,
    "currentPage": 1
  }
}
```

---

## 👥 User Endpoints

### 9. Get All Users

**GET** `/users`

**Response (200):**

```json
{
  "success": true,
  "message": "Users fetched successfully",
  "data": [
    {
      "id": "0d34142f-fd08-426f-b02a-04bd46b26717",
      "name": "Test User",
      "email": "testuser@gmail.com",
      "role": "USER",
      "createdAt": "2025-12-17T02:04:34.623Z",
      "updatedAt": "2025-12-17T02:04:34.623Z",
      "deletedAt": null
    },
    {
      "id": "caba69ef-4ca5-45b8-8955-f5a68cf4b63e",
      "name": "Test User 2",
      "email": "testuser2@gmail.com",
      "role": "USER",
      "createdAt": "2025-12-17T02:44:34.603Z",
      "updatedAt": "2025-12-17T02:44:34.603Z",
      "deletedAt": null
    },
    {
      "id": "d7704aca-89ee-4d15-aca6-51239f5d1660",
      "name": "John Cena",
      "email": "johncena@gmail.com",
      "role": "USER",
      "createdAt": "2025-12-17T03:01:40.659Z",
      "updatedAt": "2025-12-17T03:01:40.659Z",
      "deletedAt": null
    },
    {
      "id": "dc408b58-b01f-427e-8dfd-92a282d3e7e6",
      "name": "Test User",
      "email": "test@example.com",
      "role": "USER",
      "createdAt": "2025-12-18T02:12:16.534Z",
      "updatedAt": "2025-12-18T02:12:16.534Z",
      "deletedAt": null
    }
  ]
}
```

---

## 👤 Profile Endpoints

### 10. Get All Profiles

**GET** `/profiles`

**Response (200):**

```json
{
  "success": true,
  "message": "Profile fetched successfully",
  "data": [
    {
      "id": "59ddf953-1c28-4d2d-b8b9-ac2dd4145729",
      "name": "Profile User 2",
      "gender": "Female",
      "address": "Jl. Asia Afrika No. 100, Bandung",
      "image": null,
      "userId": "caba69ef-4ca5-45b8-8955-f5a68cf4b63e",
      "createdAt": "2025-12-17T02:44:40.835Z",
      "updatedAt": "2025-12-17T02:44:40.835Z",
      "deletedAt": null
    },
    {
      "id": "fbdf0a61-63ad-4a80-9408-aab0bc928092",
      "name": "John Cena",
      "gender": "male",
      "address": "Jl. Merdeka No. 123, Jakarta",
      "image": "/uploads/1765940568393-715173424.jpg",
      "userId": "d7704aca-89ee-4d15-aca6-51239f5d1660",
      "createdAt": "2025-12-17T03:02:48.401Z",
      "updatedAt": "2025-12-17T03:02:48.401Z",
      "deletedAt": null
    }
  ]
}
```

---

## 📊 Summary

### ✅ Pagination Implementation Status

| Endpoint       | Pagination | Root-Level | Status        |
| -------------- | ---------- | ---------- | ------------- |
| **Products**   | ✅         | ✅         | Working       |
| **Categories** | ✅         | ✅         | Working       |
| **Stores**     | ✅         | ✅         | Working       |
| **Users**      | ❌         | N/A        | No Pagination |
| **Profiles**   | ❌         | N/A        | No Pagination |

### 📌 Pagination Features

All paginated endpoints support:

- ✅ Default pagination (page=1, limit=10)
- ✅ Custom page and limit
- ✅ Search functionality
- ✅ Sorting by field
- ✅ Sort order (asc/desc)
- ✅ **Root-level pagination metadata** (not nested in data)

### 🎯 Response Structure (Paginated Endpoints)

```json
{
  "success": true,
  "message": "...",
  "data": [...],           // ✅ Array directly at root
  "pagination": {          // ✅ Pagination metadata at root level
    "totalItems": 100,
    "totalPages": 10,
    "currentPage": 1
  }
}
```

---

## 🔑 Notes

1. **Authentication**: Products endpoint requires Bearer token in Authorization header
2. **Seed Data**: 100 products, 8 categories, 6 stores available for testing
3. **Pagination**: All paginated endpoints return metadata at root level (not nested)
4. **Default Values**: page=1, limit=10 when not specified
5. **Search**: Case-insensitive search on name field
6. **Sorting**: Defaults to createdAt DESC if not specified
