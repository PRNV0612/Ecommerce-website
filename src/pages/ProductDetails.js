
import React from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";


const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // if product is not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  const { title, price, description, image } = product;
  return (
    <div className="container mx-auto py-8">
      <div className="flex space-x-8">
        <img src={image} alt={title} className="w-1/2 object-cover rounded-md" />
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-gray-600 mt-2">{description}</p>
          <p className="text-xl font-semibold mt-4">{price}</p>
          <button onClick={()=>addToCart(product, product.id)} className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
