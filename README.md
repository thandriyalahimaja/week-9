# Week 9 – Blog Platform

## Project Overview
Purpose:

Learn full MERN stack architecture
Implement JWT authentication
Understand role-based authorization
Build secure APIs
Learn MongoDB integration
Practice file uploads using Multer & Cloudinary
Manage articles, comments, and users

Roles Purpose:

Admin → Manage users and platform
Author → Create and manage articles
User → Read and interact with blogs

Main Goal:

To develop a real-world blogging platform with secure authentication, multiple user roles, and complete frontend-backend integration.

This project is a full-stack MERN Blog Platform developed using:

* MongoDB
* Express.js
* React.js
* Node.js
* Vite

The application supports different user roles such as:

* Admin
* Author
* User

Users can register, login, create articles, manage blogs, and interact with content based on role-based authorization.

---

# Features

## Authentication & Authorization

* User registration and login
* JWT token authentication
* Role-based access control
* Protected routes

## Author Features

* Create articles
* Update articles
* Delete articles
* View own articles
* Upload article images

## User Features

* View all articles
* Read article details
* Add comments
* Like articles

## Admin Features

* Manage users
* Manage authors
* Monitor articles
* Administrative controls

---

# Technologies Used

## Frontend

* React.js
* Vite
* React Router DOM
* Axios
* CSS

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Bcrypt
* Multer
* Cloudinary
* CORS
* Dotenv

---

# Folder Structure

```bash
week-9-main/
│
├── backend/
│   ├── APIs/
│   │   ├── AdminAPI.js
│   │   ├── AuthorAPI.js
│   │   ├── UserAPI.js
│   │   └── commonApi.js
│   │
│   ├── config/
│   │   ├── cloudinary.js
│   │   ├── cloudinaryUpload.js
│   │   └── multer.js
│   │
│   ├── middlewares/
│   │   ├── checkAuthor.js
│   │   └── verifyToken.js
│   │
│   ├── models/
│   │   ├── ArticleModel.js
│   │   └── UserModel.js
│   │
│   ├── services/
│   │   └── authService.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── App.css
│   │
│   ├── public/
│   ├── package.json
│   └── .env.example
│
└── README.md
```

---

# API Modules

## Common APIs

* User registration
* User login
* Authentication services

## Author APIs

* Create article
* Update article
* Delete article
* Get author articles

## User APIs

* Get all articles
* Read article by ID
* Comment on article
* Like articles

## Admin APIs

* Manage users and authors
* Administrative controls

---

# Installation and Setup

## 1. Clone Repository

```bash
git clone <repository-url>
```

---

# Backend Setup

## Navigate to Backend Folder

```bash
cd backend
```

## Install Dependencies

```bash
npm install
```

## Create Environment File

Create `.env` file using `.env.example`

Example:

```env
PORT=4000
MONGO_URL=your_mongodb_connection
SECRET_KEY=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## Start Backend Server

```bash
npm run dev
```

OR

```bash
npm start
```

Backend runs on:

```bash
http://localhost:4000
```

---

# Frontend Setup

## Navigate to Frontend Folder

```bash
cd frontend
```

## Install Dependencies

```bash
npm install
```

## Create Environment File

Create `.env` file using `.env.example`

Example:

```env
VITE_API_URL=http://localhost:4000
```

---

## Start Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Available Scripts

## Backend

```bash
npm run dev
```

Starts backend using nodemon.

```bash
npm start
```

Starts backend server.

---

## Frontend

```bash
npm run dev
```

Starts Vite development server.

```bash
npm run build
```

Creates production build.

```bash
npm run preview
```

Previews production build.

---

# Middleware Used

## verifyToken.js

* Verifies JWT token
* Protects private routes

## checkAuthor.js

* Checks author permissions
* Allows only authorized authors

---

# Database Models

## User Model

Contains:

* Username
* Email
* Password
* Role
* Profile image

## Article Model

Contains:

* Title
* Content
* Author details
* Comments
* Likes
* Created date

---

# React Components

Some major frontend components include:

* AuthorProfile.jsx
* AuthorArticles.jsx
* ArticleByID.jsx
* Login components
* Signup components
* Navigation components

---

# Learning Outcomes

This project helps in understanding:

* MERN stack architecture
* JWT authentication
* REST API development
* Role-based authorization
* MongoDB integration
* Middleware implementation
* File uploads with Multer
* Cloudinary image uploads
* Frontend and backend integration
* React component architecture

---

# Future Improvements

* Add pagination
* Add search functionality
* Add bookmarks feature
* Improve UI responsiveness
* Add notifications
* Add article categories
* Add dark mode
* Add real-time comments

---

# Author

Developed as part of Week 9 MERN Stack Assignments.
