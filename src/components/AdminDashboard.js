import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

const AdminDashboard = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useCart();

  const [newProduct, setNewProduct] = useState({
    id: null,
    title: "",
    price: "",
    category: "",
    image: "",
  });

  const handleAddProduct = () => {
    if (
      !newProduct.title ||
      !newProduct.price ||
      !newProduct.category ||
      !newProduct.image
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const newProductWithId = {
      ...newProduct,
      id: Date.now(),
    };

    addProduct(newProductWithId);

    setNewProduct({
      title: "",
      price: "",
      category: "",
      image: "",
    });
  };

  const handleSaveUpdate = () => {
    if (!newProduct.id) {
      alert("No product selected for update.");
      return;
    }

    updateProduct(newProduct.id, newProduct);
    setNewProduct({
      id: null,
      title: "",
      price: "",
      category: "",
      image: "",
    });
  };

  const handleDeleteProduct = (id) => {
    deleteProduct(id);
  };

  return (
    <div className="container mx-auto p-4 m-4 bg-teal-100 max-w-full">
      <div className="mb-3">
        <h2 className="text-xl font-bold">Add / Update Product</h2>
        <div className="flex flex-row gap-2 mb-4 mt-3">
          <input
            type="text"
            placeholder="Title"
            value={newProduct.title}
            onChange={(e) =>
              setNewProduct({ ...newProduct, title: e.target.value })
            }
            className="p-2 border rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            className="p-2 border rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Category"
            value={newProduct.category}
            onChange={(e) =>
              setNewProduct({ ...newProduct, category: e.target.value })
            }
            className="p-2 border rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            className="p-2 border rounded-lg w-full"
          />

          <div className="flex gap-4 mt-3 sm:mt-0">
            <button
              onClick={handleAddProduct}
              className="bg-blue-400 text-white px-4 py-2 rounded-lg w-full sm:w-auto"
            >
              Add
            </button>
            {newProduct.id && (
              <button
                onClick={handleSaveUpdate}
                className="bg-yellow-400 text-white px-4 py-2 rounded-lg w-full sm:w-auto"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 bg-cyan-50">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="border p-4 flex flex-col h-full justify-between items-center rounded-lg shadow-md"
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
            <h3 className="text-sm font-bold text-center">{product.title}</h3>
            <p className="text-center text-gray-600">${product.price}</p>

            <div className="mt-auto">
              <Link
                to={`/product/${product.id}`}
                className="text-blue-500 text-sm block text-center mb-2"
              >
                View Details
              </Link>
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="flex flex-row items-center gap-6 w-full">
                  <button
                    className="bg-yellow-400 text-white text-xs px-2 py-1 w-full rounded"
                    onClick={() => setNewProduct({ ...product })}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-400 text-white text-xs px-2 py-1 w-full rounded"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
