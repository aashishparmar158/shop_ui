// src/pages/admin/ProductManager.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts , deleteProduct } from "../../features/products/productSlice"; // adjust path


const ProductManager = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  const [showAddModal, setShowAddModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">🛍️ Manage Products</h1>

      <button
        onClick={() => setShowAddModal(true)}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        + Add New Product
      </button>

      {loading && <p>Loading products...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr>
            <th className="p-3 border-b">Name</th>
            <th className="p-3 border-b">Price</th>
            <th className="p-3 border-b">Category</th>
            <th className="p-3 border-b">Stock</th>
            <th className="p-3 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products || [].map((prod) => (
            <tr key={prod.id} className="hover:bg-gray-100">
              <td className="p-3 border-b">{prod.name}</td>
              <td className="p-3 border-b">${prod.price}</td>
              <td className="p-3 border-b">{prod.category}</td>
              <td className="p-3 border-b">{prod.stock}</td>
              <td className="p-3 border-b space-x-2">
                <button
                  onClick={() => setEditProduct(prod)}
                  className="px-2 py-1 bg-yellow-400 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(prod.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add/Edit Modal */}
      {showAddModal && (
        <Modal onClose={() => setShowAddModal(false)}>
          {/* Form for Add Product here */}
          <h2 className="text-xl font-bold mb-2">Add New Product</h2>
          {/* You can build a ProductForm component to reuse here */}
        </Modal>
      )}

      {editProduct && (
        <Modal onClose={() => setEditProduct(null)}>
          <h2 className="text-xl font-bold mb-2">Edit Product</h2>
          {/* Prefill ProductForm with editProduct */}
        </Modal>
      )}
    </div>
  );
};

export default ProductManager;
