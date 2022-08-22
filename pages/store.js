import Layout from "../components/Layout";
import List from "../components/List";

const Store = ({ results }) => {
  return (
    <Layout page={"Virtual store"}>
      <main className="contenedor">
        <h1 className="heading">Guitars</h1>
        <List results={results} />
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitars?_sort=createdAt:desc`;
  const response = await fetch(url);
  const results = await response.json();

  return {
    props: {
      results,
    },
  };
}

export default Store;
