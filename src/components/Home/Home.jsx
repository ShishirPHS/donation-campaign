import { useLoaderData } from "react-router-dom";
import AllDonations from "../AllDonations/AllDonations";
import Banner from "../Banner/Banner";
import { useState } from "react";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const allDonations = useLoaderData();

  const handleSearchValue = (value) => {
    setSearchValue(value);
  };

  return (
    <div>
      <div>
        <Banner handleSearchValue={handleSearchValue}></Banner>
        <AllDonations
          searchValue={searchValue}
          allDonations={allDonations}
        ></AllDonations>
      </div>
    </div>
  );
};

export default Home;
