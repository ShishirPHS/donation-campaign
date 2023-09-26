import Chart from "../Chart/Chart";

const Statistics = () => {
  return (
    <div className="container mx-auto">
      <Chart></Chart>
      <div className="flex justify-center mt-10">
        <div className="flex items-center mr-14">
          <h5 className="text-[#0B0B0B] text-lg">Your Donation</h5>
          <div className="bg-[#00C49F] w-[100px] h-3 rounded-sm ml-4"></div>
        </div>
        <div className="flex items-center">
          <h5 className="text-[#0B0B0B] text-lg">Total Donation</h5>
          <div className="bg-[#FF444A] w-[100px] h-3 rounded-sm ml-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
