
# Full-Stack Authentication Template

A reusable, full-stack authentication template built with React (frontend) and Node.js/Express (backend). This project supports user registration, login, and state management, and is designed to be a flexible starting point for any app requiring authentication.

## Features

- User Auth: Sign-up and login functionality.
- State Management: Tracks logged-in user with UserContext.
- MongoDB: User data storage in MongoDB.
- Backend API: Endpoints for registration, login, and error handling.
- React Router: Navigation between Signup and Login.
- Axios: API requests for user data.
- Environment Variables: Configurable backend URL and settings.

## Tech Stack

**Client:** React, Vite, Axios, React Router

**Server:** Node, Express, MongoDB

**Authentication:** JWT (JSON Web Tokens) 


## Getting started

**Prerequisite**
- Node.js 
- MongoDB

**Clone Repository**

```bash
git clone https://github.com/lucillealvar/Register_Login.git
cd Register_Login
```
## Setup Frontend 

Navigate to front-end folder
```bash
  cd front-end 
```


## Installation

Install dependencies 

```bash
  npm install 
```
Create a .env file in the root of the frontend directory and add your backend API URL:

```bash
  VITE_REACT_APP_BASE_URL="http://localhost:5000/api"
```
Start the frontend development server:

```bash
  npm run dev
```
## Setup Backend

Navigate to back-end directory

```bash
  cd back-end
```


## Installation


Install dependencies 

```bash
  npm install 
```
Create a .env file in the root of the backend directory and add your MongoDB connection string:

```bash
MONGO_URI="your_mongo_connection_string"
PORT=5000
```
Start the backend server:

```bash
  npm start
```
## Future Enhancement

- Display detailed error for each input field
- Implement a profile page that shows the user's name.
- Add a Navbar for navigation across pages.
- Implement a Footer to display site information at the bottom of the page.
- Password recovery/reset


This template is a starting point for any project requiring basic authentication functionality. Feel free to customize and expand it as needed!
