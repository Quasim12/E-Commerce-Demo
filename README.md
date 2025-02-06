# E-Commerce Application
This is a simple e-commerce application built with React, React Router, Context API TailwindCSS. The application includes features such as product listing, product details, cart management, wishlist management, login, sigup and an admin dashboard for managing products.

## Setup Instructions

1. **Clone the repository:**
   ```bash
- git clone https://github.com/Quasim12/E-Commerce-Demo.git
- cd E-Commerce-Demo

2. Install dependencies:
- npm install

3. Start the development server:
- npm start

4. Open the application in your browser: Navigate to http://localhost:3000 in your web browser.

## Live Demo
- You can view the live version of the application here: https://demmo-e-commerce.netlify.app/

## Project Structure
- The project structure is organized as follows:
- e-commerce-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── AdminDashboard.js
│   │   ├── Cart.js
│   │   ├── Footer.js
│   │   ├── Home.js
│   │   ├── Loader.js
│   │   ├── Login.js
│   │   ├── Navbar.js
│   │   ├── ProductDetails.js
│   │   ├── SignUp.js
│   │   └── Wishlist.js
│   ├── context/
│   │   └── CartContext.js
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── reportWebVitals.js
├── .gitignore
├── package.json
├── README.md
└── ...

## Components
- AdminDashboard.js: Allows admin users to add, update, and delete products.
- Cart.js: Displays the products added to the cart and allows users to remove items.
- Footer.js: The footer component of the application.
- Home.js: Displays the list of products with search and filter options.
- Loader.js: A loading spinner component used during lazy loading.
- Login.js: A login form for user authentication.
- Navbar.js: The navigation bar with links to different pages.
- ProductDetails.js: Displays detailed information about a selected product.
- SignUp.js: A sign-up form for new users.
- Wishlist.js: Displays the products added to the wishlist and allows users to add items to the cart or remove them from the wishlist.

## Context
- CartContext.js: Manages the global state for the cart, wishlist, and products using React Context API.

## Main Files
- App.js: The main application component that sets up the routes and provides the context.
- index.js: The entry point of the application that renders the App component.
- index.css: The main CSS file for styling the application.
- reportWebVitals.js: Used for measuring performance in the application.

## Features
- Product Listing: Browse through a list of products with search and filter options.
- Product Details: View detailed information about a selected product.
- Cart Management: Add products to the cart, view the cart, and remove items from the cart.
- Wishlist Management: Add products to the wishlist, view the wishlist, and move items from the wishlist to the cart.
- Admin Dashboard: Admin users can add, update, and delete products.
