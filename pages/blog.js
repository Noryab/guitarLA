import Layout from "../components/Layout";

import ListBlog from "../components/ListBlog";

const Blog = ({ results }) => {
  console.log(results);
  return (
    <Layout page={"Virtual-Blog"}>
      <main className="contenedor">
        <ListBlog results={results} />
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const url = `${process.env.API_URL}/blogs?_sort=createdAt:desc`;
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
