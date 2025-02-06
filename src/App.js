import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import SignUp from "./components/SignUp";

const Home = lazy(() => import("./components/Home"));
const Cart = lazy(() => import("./components/Cart"));
const ProductDetails = lazy(() => import("./components/ProductDetails"));
const Wishlist = lazy(() => import("./components/Wishlist"));
const Login = lazy(() => import("./components/Login"));
const AdminDashboard = lazy(() => import("./components/AdminDashboard"));

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <main className="pt-16"> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id?" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
            <Footer />
          </main>
        </Suspense>
      </Router>
    </CartProvider>
  );
};

export default App;
