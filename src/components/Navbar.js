import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-700 text-white p-4 flex justify-between fixed w-full top-0 left-0 z-50 shadow-lg">
      <Link to="/" className="font-bold">E-Commerce</Link>
      <div>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/cart" className="mx-2">Cart</Link>
        <Link to="/wishlist" className="mx-2">Wishlist</Link>
        <Link to="/login" className="mx-2">Login</Link>
        <Link to="/admin" className="mx-2">Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
