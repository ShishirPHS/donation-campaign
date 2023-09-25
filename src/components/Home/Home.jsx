import { useLoaderData } from "react-router-dom";
import AllDonations from "../AllDonations/AllDonations";
import Banner from "../Banner/Banner";

const Home = () => {
  const allDonations = useLoaderData();

  return (
    <div>
      <div>
        <Banner></Banner>
        <AllDonations allDonations={allDonations}></AllDonations>
      </div>
    </div>
  );
};

export default Home;
