import { useEffect, useState } from "react";
import "../Styles/LoadMoreData.css";

export default function LoadMoreData() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setIsLoading(true);
      console.log("inside fetch products");

      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );

      const result = await response.json();

      if (result && result.products) {
        setProducts((prev) => [...prev, ...result.products]);
      }
      setIsLoading(false);

      console.log("Rendering component with", products.length, "products");
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length >= 100) setDisableButton(true);
  }, [products]);

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item, index) => {
              return (
                <div key={item.id} className="product">
                  <img src={item.thumbnail} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              );
            })
          : null}
      </div>
      <div>
        <button
          disabled={disableButton}
          onClick={() => setCount((count) => count + 1)}
          className="button-container"
        >
          Load more products
        </button>
        {disableButton ? "You have reached maximum products" : null}
      </div>
    </div>
  );
}
