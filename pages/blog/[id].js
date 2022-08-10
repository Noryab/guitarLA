import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { formatDate } from "../../helpers";
import styles from "../../styles/Input.module.css";

const InputBlog = ({ result }) => {
  const { content, image, description, published_at, title } = result;
  return (
    <Layout>
      <main className="contenedor">
        <h1 className="heading">{title}</h1>
        <article className={styles.input}>
          <Image
            layout="responsive"
            width={800}
            height={600}
            src={image.url}
            alt={`Input image ${title}`}
          />
          <div className={styles.content}>
            <p className={styles.dateAt}>{formatDate(published_at)}</p>
            <p className={styles.text}>{content}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export async function getServerSideProps({ query: { id } }) {
  const url = `${process.env.API_URL}/blogs/${id}`;
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);

  return {
    props: {
      result,
    },
  };
}

export default InputBlog;
