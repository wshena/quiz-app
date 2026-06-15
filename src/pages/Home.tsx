import { useLoaderData } from "react-router-dom";

const Home = () => {
  const allCategory = useLoaderData();

  console.log(allCategory);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
