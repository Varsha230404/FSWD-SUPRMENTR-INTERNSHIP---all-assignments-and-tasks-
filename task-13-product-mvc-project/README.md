# Task 13 - Product MVC Project

## APIs
- `GET /api/products` - get all products
- `GET /api/products/:id` - get product by id
- `POST /api/products` - add product (`name`, `price`, `category`)

## Self Code Review
### 3 things done well
1. Followed MVC-style separation (`models`, `controllers`, `routes`).
2. Added request logger middleware for easier debugging.
3. Added centralized error handler and 404 fallback.

### 3 improvements needed
1. Add persistent database instead of in-memory array.
2. Add schema validation (e.g., Joi/Zod) for stronger request validation.
3. Add automated tests for route coverage and edge cases.
