import { useState, useEffect } from "react";
import "../styles/normalize.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) ?? [];
    setCart(cartLS);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addCart = (product) => {
    if (cart.some((article) => article.id === product.id)) {
      const cartUpdated = cart.map((article) => {
        if (article.id === product.id) {
          article.amount = product.amount;
        }
        return article;
      });
      setCart(cartUpdated);
    } else {
      setCart([...cart, product]);
    }
  };

  const amountUpdate = (product) => {
    const cartUpdated = cart.map((article) => {
      if (article.id === product.id) {
        article.amount = product.amount;
      }
      return article;
    });
    setCart(cartUpdated);
  };

  const deleteProduct = (id) => {
    const cartUpdated = cart.filter((article) => article.id !== id);
    setCart(cartUpdated);
  };

  return (
    <Component
      {...pageProps}
      cart={cart}
      addCart={addCart}
      amountUpdate={amountUpdate}
      deleteProduct={deleteProduct}
    />
  );
}

export default MyApp;
