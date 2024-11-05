// pages/api/products.js

export default async function handler(req, res) {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      res.status(200).json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Failed to fetch products" });
    }
  }
  