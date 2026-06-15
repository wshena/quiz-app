import { useLoaderData } from "react-router-dom";
import ContentContainer from "../components/container/ContentContainer";

const Home = () => {
  // const allCategory = useLoaderData();

  return (
    <div className="bg-black/80 text-white">
      <ContentContainer>
        <h1>Home Page</h1>
      </ContentContainer>
    </div>
  );
};

export default Home;
