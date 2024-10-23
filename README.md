# [PROMO-PHONE E-Commerce Website](https://promo-phone.vercel.app/)

This is a full-featured e-commerce web application built using the MERN stack (MongoDB, Express, React, and Node.js). The project is divided into three main sections: the frontend, the backend, and the admin panel.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [License](#license)

## Features

- User authentication and authorization (login, register)
- Product listing, filtering, and searching
- Shopping cart with add/remove/update items functionality
- Checkout process with order summary and payment gateway
- Admin panel for managing products, orders, and users
- Responsive design, optimized for both desktop and mobile
- RESTful API for interacting with the database
- Secure password storage and authentication with JWT

## Technologies

- **Frontend:** React, Context API, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Admin Panel:** React, Context API
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Payment Gateway:** COD

## Folder Structure

The project repository is divided into three major parts:

- **Backend:** Contains all server-side logic, including API routes, database models, and authentication.
  - Path: `/backend`

- **Frontend:** Contains the client-side of the application, built with React, including product display, cart functionality, and user authentication.
  - Path: `/frontend`

- **Admin Panel:** A separate admin dashboard for managing the website, such as adding new products, managing users, and processing orders.
  - Path: `/admin`

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. **Install backend dependencies:**
    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies:**
    ```bash
    cd ../frontend
    npm install
    ```

4. **Install admin panel dependencies:**
    ```bash
    cd ../admin
    npm install
    ```
