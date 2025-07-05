import { useEffect, useState } from "react";

export default function LoadMoreData() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setIsLoading(true)
      
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json()
      
      if (result && result.products && result.length) {
        setProducts(result.products)
        setIsLoading(false)
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => fetchProducts(), []);

  return <div className="container"></div>;
}
