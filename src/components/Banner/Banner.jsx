const Banner = () => {
  return (
    <div className="bg-[url('/src/assets/images/banner-bg.png')]">
      <div className="pt-36 pb-48 bg-[#fffffff2]">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h2 className="text-[#0B0B0B] text-5xl font-bold">
            I Grow By Helping People In Need
          </h2>
          <div>
            <input
              className="p-4 w-[400px] border rounded-l-lg mt-10"
              type="text"
              name=""
              id=""
              placeholder="Search here...."
            />
            <button className="py-4 px-7 bg-[#FF444A] border border-[#FF444A] rounded-r-lg">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
