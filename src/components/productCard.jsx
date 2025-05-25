// components/ProductCard.jsx
const ProductCard = ({ product }) => {
    return (
      <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition-all duration-300">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-xl"
        />
        <h2 className="mt-4 text-xl font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-lg font-bold">${product.price}</span>
          <button className="bg-black text-white px-4 py-1 rounded-xl text-sm hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  