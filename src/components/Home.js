import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

const Home = () => {
  const { products, addToWishlist, wishlist, removeFromWishlist } = useCart();
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("price");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) => (category ? product.category === category : true))
    .sort((a, b) =>
      sortType === "price"
        ? a.price - b.price
        : (b.rating?.rate || 0) - (a.rating?.rate || 0)
    );

  const toggleWishlist = (product) => {
    if (wishlist.some((item) => item.id === product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="container mx-auto p-4 m-4 bg-teal-100 max-w-fit ml-3 mr-3 mt-3 ">
      <div className="flex flex-wrap gap-2 mb-4">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 w-96"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border p-2 ml-auto"
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="price">Sort by Price</option>
          <option value="rating">Sort by Rating</option>
        </select>
        <select
          className="border p-2 ml-2"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 bg-cyan-50">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            className="bg-blue-100 border p-4 flex flex-col h-full justify-between items-center rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-24 h-24 object-contain mb-4"
              loading="lazy"
            />
            <h3 className="text-sm font-bold mt-2 text-center">
              {product.title}
            </h3>
            <p className="text-center text-gray-600">${product.price}</p>

            <div className="flex-grow flex flex-col justify-between mt-2 w-full">
              <Link
                to={`/product/${product.id}`}
                className="text-blue-500 text-sm mt-auto text-center"
              >
                View Details
              </Link>
              <button
                className="bg-green-500 text-white text-xs px-2 py-1 rounded w-auto mx-auto mt-2"
                onClick={() => toggleWishlist(product)}
              >
                {wishlist.some((item) => item.id === product.id)
                  ? "Remove from Wishlist"
                  : "Add to Wishlist"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
