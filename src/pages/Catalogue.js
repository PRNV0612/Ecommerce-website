import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
//import { CartContext } from '../context/CartContext';

const { products } = useContext(ProductContext);
//const { addToCart } = useContext(CartContext);

const Catalogue = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-8">Products</h2>
      <div className="grid grid-cols-2 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
