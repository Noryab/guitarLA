import React, { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Cart.module.css";

const Cart = ({ cart, amountUpdate, deleteProduct }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = cart.reduce(
      (total, product) => total + product.amount * product.price,
      0
    );
    setTotal(calculateTotal);
  }, [cart]);
  return (
    <Layout>
      <h1 className="heading">Cart</h1>
      <main className={`${styles.content} contenedor`}>
        <div className={styles.cart}>
          {cart.length === 0
            ? "Empty Cart"
            : cart.map((product) => (
                <div key={product.id} className={styles.product}>
                  <div>
                    <Image
                      layout="responsive"
                      width={250}
                      height={480}
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <div>
                    <p className={styles.name}>{product.name}</p>
                    <div className={styles.amount}>
                      <p>Amount:</p>
                      <select
                        value={product.amount}
                        className={styles.select}
                        onChange={(e) =>
                          amountUpdate({
                            amount: e.target.value,
                            id: product.id,
                          })
                        }
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                      </select>
                    </div>
                    <p className={styles.price}>
                      $<span>{product.price}</span>
                    </p>
                    <p className={styles.subtotal}>
                      Subtotal: $<span>{product.price * product.amount}</span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className={styles.delete}
                    onClick={() => deleteProduct(product.id)}
                  >
                    X
                  </button>
                </div>
              ))}
        </div>
        <div className={styles.total}>
          {total > 0 ? (
            <>
              <h3>Resume</h3>
              <p>Total: ${total}</p>
            </>
          ) : (
            <p>There isn`t products</p>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default Cart;
