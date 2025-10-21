# NFT Marketplace Backend

This is the backend service for the NFT Marketplace application, built with Node.js, Express, and TypeScript. It handles NFT data management, storage, and provides a RESTful API for the frontend.


## Tech Stack

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **Mongoose**: ODM library for MongoDB.
- **Multer**: Middleware for handling `multipart/form-data`, used for file uploads.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or later recommended)
- [npm](https://www.npmjs.com/)
- A [MongoDB](https://www.mongodb.com/) database instance (local or cloud-hosted like MongoDB Atlas).

## Installation

1.  **Clone the repository** (if you haven't already).
2.  **Navigate to the backend directory**:
    ```bash
    cd nftBackend
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```

## Configuration

The application requires a `.env` file in the `nftBackend` root directory to store environment variables.

1.  Create a file named `.env`:
    ```bash
    touch .env
    ```
2.  Add the following variables. Replace the placeholder with your actual MongoDB connection string.

    ```env
    # .env.example

    # The port the server will run on
    PORT=5002

    # Your MongoDB connection URI
    MONGO_URI=mongodb+srv://<user>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
    ```

## Running the Application

To run the server in development mode with auto-reloading (using `ts-node-dev`), use:

```bash
npm run dev
```

## API Endpoints

- `GET /api/NFTs`

  - Retrieves a list of all NFTs.
  - Supports searching by name via a query parameter: `GET /api/NFTs?name=MyCoolNFT`.
  - Returns a JSON array of NFT objects.

- `POST /api/NFTs`
  - Creates a new NFT.
  - Expects a `multipart/form-data` payload with the following fields:
    - `name` (String)
    - `description` (String)
    - `price` (Number)
    - `image` (File)
  - Returns the newly created NFT object as JSON.
# Updated Tue Oct 21 18:10:31 EEST 2025
