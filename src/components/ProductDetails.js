import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, addToCart } = useCart(); // Using global state

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center text-red-500">Product not found!</h2>;
  }

  const isAdmin = false;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-1/2 h-48 object-contain rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
          <p className="text-lg text-gray-700 mb-6">{product.description}</p>
          <p className="text-xl font-semibold text-gray-900 mb-4">
            Rating: {product.rating?.rate} ⭐ ({product.rating?.count} reviews)
          </p>
          <p className="text-2xl font-bold text-gray-900 mb-6">
            ${product.price}
          </p>

          {!isAdmin && (
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
