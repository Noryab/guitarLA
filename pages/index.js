import Course from "../components/Course";
import Layout from "../components/Layout";
import List from "../components/List";
import ListBlog from "../components/ListBlog";

export default function Home({ products, course, blog }) {
  return (
    <Layout page={"Home"} product={products[2]}>
      <main className="contenedor">
        <h1 className="heading">Learning Next</h1>
        <List results={products} />
      </main>
      <Course course={course} />
      <section className="contenedor">
        <ListBlog results={blog} />
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const urlProducts = `${process.env.API_URL}/guitars?_sort=createdAt:desc`;
  const urlCourse = `${process.env.API_URL}/blocks`;
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=createdAt:desc`;

  const [resultsProducts, resultCourse, resultBlog] = await Promise.all([
    fetch(urlProducts),
    fetch(urlCourse),
    fetch(urlBlog),
  ]);

  const [products, course, blog] = await Promise.all([
    resultsProducts.json(),
    resultCourse.json(),
    resultBlog.json(),
  ]);
  return {
    props: {
      products,
      course,
      blog,
    },
  };
}
