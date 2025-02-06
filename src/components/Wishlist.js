import { useCart } from "../context/CartContext";
const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useCart();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container p-4 rounded-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-center">Wishlist</h2>
        {wishlist.length === 0 ? (
          <p className="text-center">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="p-4 flex flex-col items-center bg-gray-50 rounded-lg shadow-md"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-32 object-contain mb-4"
                />
                <h3 className="font-bold text-center mb-2">{product.title}</h3>
                <p className="text-center mb-4">${product.price}</p>
                <button
                  className="bg-blue-500 text-white p-2 mb-2 w-full"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
                <button
                  className="bg-red-500 text-white p-2 w-full"
                  onClick={() => removeFromWishlist(product.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
