
---

# MDA Directory

This project is a **Monorepo** setup with a **React** frontend and a **Node.js** backend. It allows users to interact with an MDA (Ministries, Departments, and Agencies) directory, providing functionalities like viewing MDA details, searching, and more. The backend is built using **Node.js**, **Express**, and **MongoDB**, while the frontend uses **React**, **Redux Toolkit**, and **Axios**.

## Table of Contents

- [Installation](#installation)
- [Project Structure](#project-structure)
- [Frontend](#frontend)
  - [Store and Redux Toolkit](#store-and-redux-toolkit)
  - [Components](#components)
  - [Hooks](#hooks)
- [Backend](#backend)
  - [Insert Demo Data](#insert-demo-data)
  - [Controllers and Routes](#controllers-and-routes)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (or use MongoDB Atlas for a cloud database)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/walonCode/mda_directory.git
   ```

2. Navigate to the root folder of the monorepo:
   ```bash
   cd mda_directory
   ```

3. Install dependencies for both the client and server:
   ```bash
   npm install
   ```

4. Set up environment variables for the backend (in the `server/.env` file):
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=your_desired_port
   ```

## Project Structure

The project is organized into two main directories:

- `client/` – The React frontend.
- `server/` – The Node.js backend.

### Frontend Structure (`client/`)

The client side of the project is built with React and uses Redux Toolkit for state management and Axios for API calls.

#### `client/src/`
- **`components/`**: Contains the main React components that make up the UI, such as the MDA cards, search bar, etc.
- **`hooks/`**: Custom hooks for managing logic and side effects in components.
- **`store/`**:
  - **`store.ts`**: Redux store configuration.
  - **`features/`**: Contains Redux slices for managing different application states.
    - **`mdaSlice.ts`**: Manages MDA data.
    - **`searchSlice.ts`**: Handles search term input and updates.

#### Redux Store Example
- The `store.ts` file configures the Redux store, combining the slices for MDA and search term.
- The `searchSlice.ts` and `mdaSlice.ts` are used to manage the global state of the application, such as searching through MDAs or fetching MDA data.

### Backend Structure (`server/`)

The backend handles API requests, connects to the MongoDB database, and serves data to the client.

#### `server/`
- **`config/`**: Contains configuration files such as the database connection.
- **`controller/`**: Contains the logic for handling different API routes.
  - **`mdaController.js`**: Includes the `insertMda` function to insert demo MDA data into the database.
- **`data/`**: Sample data files (for testing purposes).
- **`models/`**: MongoDB models, such as MDA schema.
- **`routes/`**: Express routes for the backend API endpoints.

#### `insertMda` Function
To inject demo MDA data into the MongoDB database, the `insertMda` function is called automatically when running the backend server. It will populate the database with sample MDA data if the `MONGO_URI` is set in the `.env` file.

### Running the Application

To run the application locally:

1. **Start the backend** and insert demo data:
   ```bash
   cd server
   npm run dev
   ```

   This will automatically connect to MongoDB (using the URI in `.env`), and the `insertMda` function will fill the database with sample data if it's not already present.

2. **Start the frontend**:
   ```bash
   cd client
   npm run dev
   ```

This will run the React application on your local machine. The frontend will communicate with the backend API for data retrieval and display.

### Running the Insert Demo Data Script (Optional)

If you need to manually trigger the insertion of demo data into the MongoDB database, simply run the backend server with `npm run dev`. This will trigger the `insertMda` function and populate the database with sample MDA data.

## Contributing

We welcome contributions to improve this project! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

Please ensure that your changes pass any relevant tests and follow the project's coding style.

## License

This project is licensed under the MIT License.

---

