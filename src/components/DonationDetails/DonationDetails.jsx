import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";
import { saveDonation } from "../Utility/LocalStorage";

const DonationDetails = () => {
  const [donation, setDonation] = useState({});
  const { title, title_color, image, price } = donation;

  const { id } = useParams();
  const idInt = parseInt(id);

  const allDonations = useLoaderData();

  useEffect(() => {
    const findDonation = allDonations.find(
      (singleDonation) => singleDonation.id == id
    );
    setDonation(findDonation);
  }, [id, allDonations]);

  const handleDonation = () => {
    saveDonation(idInt);
  };

  return (
    <div className="container mx-auto">
      <div className="relative">
        <img
          className="w-full rounded-lg mt-7 mb-14"
          src={image}
          alt={`Image for ${title}`}
        />
        <div className="absolute bottom-0 w-full bg-[#0b0b0b80] p-9 rounded-b-lg">
          <button
            onClick={handleDonation}
            style={{ backgroundColor: title_color }}
            className="flex items-center py-4 px-7 rounded text-white text-xl font-semibold "
          >
            Donate <BsCurrencyDollar></BsCurrencyDollar>
            {price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
