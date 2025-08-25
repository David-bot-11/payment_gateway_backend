# Payment Gateway Backend

A miniature version of payment gateway systems used globally, built with Node.js, Express, and MongoDB. This backend provides core functionalities for merchants, customers, and order management, suitable for integration with payment platforms.
A simplified payment gateway backend that allows merchants (like Flipkart) to integrate, create orders, and process payments securely using Razorpay APIs.
This project demonstrates how modern gateways (Razorpay, Stripe, PayPal) work under the hood.

## Features

- Merchant registration and management
- Customer registration and management
- Order creation and tracking
- Secure API key and secret key handling
- MongoDB integration using Mongoose
- Environment-based configuration
- Middleware support for authentication and file uploads

## Project Structure

```
.env
.env.sample
.gitignore
.prettierignore
.prettierrc
app.js
index.js
package.json
README.md
controllers/
    merchant.controller.js
database/
    db.database.js
middlewares/
    authetication.middleware.js
    multer.middleware.js
models/
    customer.models.js
    merchant.models.js
    order.model.js
routes/
utils/
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB instance (local or cloud)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/David-bot-11/payment_gateway_backend.git
    cd payment_gateway_backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Configure environment variables:
    - Copy `.env.sample` to `.env` and set your MongoDB URI:
        ```
        MONGODB_URI=your_mongodb_connection_string
        ```

### Running the Application

- Start the server:
    ```sh
    npm start
    ```
- For development with auto-reload:
    ```sh
    npm run dev
    ```

The server will run on the port specified in your `.env` file (default: 3000).

## Core Files

- [`index.js`](index.js): Entry point, loads environment variables and starts the server.
- [`app.js`](app.js): Configures Express app, middleware for CORS, JSON parsing, and cookies.
- [`database/db.database.js`](database/db.database.js): Connects to MongoDB using Mongoose.
- [`models/merchant.models.js`](models/merchant.models.js): Defines the [`Merchant`](models/merchant.models.js) schema and model.
- [`models/customer.models.js`](models/customer.models.js): Defines the [`Customer`](models/customer.models.js) schema and model.
- [`models/order.model.js`](models/order.model.js): Defines the [`Order`](models/order.model.js) schema and model.

## Models

### [`Merchant`](models/merchant.models.js)

- Fields: id, name, email, phone, apiKey, secretKey, webhookUrl, status, metadata
- Unique constraints on name, email, and phone

### [`Customer`](models/customer.models.js)

- Fields: id, name, email, phone, merchantId (ref), address, metadata

### [`Order`](models/order.model.js)

- Fields: id, merchantId (ref), amount, currency, razorpayOrderId, status, customerDetails, metadata

## Environment Variables

See [.env.sample](.env.sample) for required variables.

## License

ISC

## Author

[David-bot-11](https://github.com/David-bot-11)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Issues

For bug reports and feature requests, please use [GitHub Issues](https://github.com/David-bot-11/payment_gateway_backend/issues)