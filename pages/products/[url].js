import Image from "next/image";
import Layout from "../../components/Layout";

import styles from "../../styles/Product.module.css";

const Product = ({ result }) => {
  const { name, image, price, description } = result[0];
  return (
    <Layout page={`Guitar ${name}`}>
      <div className={styles.product}>
        <Image
          layout="responsive"
          width={180}
          height={350}
          src={image.url}
          alt={`Guitar Image ${name}`}
        />
        <div className={styles.content}>
          <h3>{name}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>${price}</p>

          <form className={styles.form}>
            <label>Amount:</label>
            <select>
              <option value="">-- Select --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
            <input type="submit" value="Add to cart" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { url } }) {
  const urlProduct = `${process.env.API_URL}/guitars?url=${url}`;
  const response = await fetch(urlProduct);
  const result = await response.json();

  return {
    props: {
      result,
    },
  };
}

export default Product;
