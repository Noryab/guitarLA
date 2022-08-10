import Layout from "../components/Layout";
import Input from "../components/Input";
import styles from "../styles/Blog.module.css";

const Blog = ({ results }) => {
  console.log(results);
  return (
    <Layout page={"Virtual Blog"}>
      <main className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={styles.blog}>
          {results.map((result) => (
            <Input key={result.id} result={result} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const url = `${process.env.API_URL}/blogs`;
  const response = await fetch(url);
  const results = await response.json();

  return {
    props: {
      results,
    },
  };
}

// dynamic content
/* export async function getServerSideProps() {
  const url = `${process.env.API_URL}/blogs`;
  const response = await fetch(url);
  const results = await response.json();
  console.log(results);

  return {
    props: {
      results,
    },
  };
}
 */
export default Blog;
