import Course from "../components/Course";
import Layout from "../components/Layout";
import List from "../components/List";

export default function Home({ products, course }) {
  return (
    <Layout page={"Home"}>
      <main className="contenedor">
        <h1 className="heading">Learning Next</h1>
        <List results={products} />
      </main>
      <Course course={course} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const urlProducts = `${process.env.API_URL}/guitars?_sort=createdAt:desc`;
  const urlCourse = `${process.env.API_URL}/blocks`;

  const [resultsProducts, resultCourse] = await Promise.all([
    fetch(urlProducts),
    fetch(urlCourse),
  ]);

  const [products, course] = await Promise.all([
    resultsProducts.json(),
    resultCourse.json(),
  ]);

  return {
    props: {
      products,
      course,
    },
  };
}
