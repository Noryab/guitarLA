import Layout from "../components/Layout";

const Store = ({ results }) => {
  return (
    <Layout page={"Virtual store"}>
      <main className="contenedor">
        <h1 className="heading">Guitars</h1>
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitars`;
  const response = await fetch(url);
  const results = await response.json();

  return {
    props: {
      results,
    },
  };
}

export default Store;
