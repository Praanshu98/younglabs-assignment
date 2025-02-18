## Greeting App

This is a simple full-stack application that allows users to enter their name and receive a personalized greeting.

### Features

- **Frontend**: Built using React
- **Backend**: Node.js with Express.js
- **API**: Simple RESTful API for greeting
- **Styling**: Basic Tailwind CSS for UI

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite)
- **Backend**: Node.js, Express.js
- **Styling**: Tailwind CSS

---

## 🚀 Installation & Setup

### Prerequisites

- [Node.js](https://nodejs.org/) installed

### Steps

1. Clone the repository:

   ```sh
   git clone https://github.com/your-repo/greeting-app.git
   cd greeting-app
   ```

2. Install dependencies for both frontend and backend:

   ```sh
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Start the backend:

   ```sh
   cd backend
   npm run dev
   ```

   The server will run on `http://localhost:3000`

4. Start the frontend:
   ```sh
   cd frontend
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`

---

## 🖥️ API Endpoints

| Method | Endpoint               | Description                | Example Response                                     |
| ------ | ---------------------- | -------------------------- | ---------------------------------------------------- |
| `GET`  | `/api/greet?name=John` | Returns a greeting message | `{ "message": "Hello John! Welcome to YoungLabs." }` |

**Error Handling**

- If no name is provided: `{ "error": "Name is required" }`

---

## 🎨 UI Overview

- A simple input field to enter a name
- "Greet" button to fetch the greeting
- "Reset" button to clear the input
- Display of the greeting message
