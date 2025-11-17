import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getProducts, deleteProduct } from '../utils/mockAPI';
import '../styles/Products.css';

const Products = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    const data = await getProducts();
    setProducts(data);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      await deleteProduct(id);
      loadProducts();
    }
  };

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Products Management</h1>
        {user?.role === 'manager' && (
          <Link to="/products/new" className="btn-primary">
            Add New Product
          </Link>
        )}
      </div>

      <div className="products-table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
              {user?.role === 'manager' && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td className={product.quantity < 10 ? 'low-stock' : ''}>
                  {product.quantity}
                </td>
                <td>
                  <span className={`status ${product.quantity === 0 ? 'out-of-stock' : product.quantity < 10 ? 'low-stock' : 'in-stock'}`}>
                    {product.quantity === 0 ? 'Out of Stock' : product.quantity < 10 ? 'Low Stock' : 'In Stock'}
                  </span>
                </td>
                {user?.role === 'manager' && (
                  <td className="actions">
                    <Link to={`/products/edit/${product.id}`} className="btn-edit">
                      Edit
                    </Link>
                    <button 
                      onClick={() => handleDelete(product.id)} 
                      className="btn-delete"
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;