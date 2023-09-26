import { useState } from "react";

const Banner = () => {
  const [search, setSearch] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="bg-[url('/src/assets/images/banner-bg.png')] bg-cover bg-center">
      <div className="pt-36 pb-48 bg-[#fffffff2]">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h2 className="text-[#0B0B0B] text-5xl font-bold">
            I Grow By Helping People In Need
          </h2>
          <div>
            <form onSubmit={handleFormSubmit}>
              <input
                onChange={handleSearchChange}
                className="p-4 w-[400px] border rounded-l-lg mt-10"
                type="text"
                placeholder="Search here...."
              />
              <input
                className="py-4 px-7 bg-[#FF444A] border border-[#FF444A] rounded-r-lg"
                type="submit"
                value="Search"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
