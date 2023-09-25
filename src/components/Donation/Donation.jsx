import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../Utility/LocalStorage";
import DonatedCard from "../DonatedCard/DonetedCard";

const Donation = () => {
  const [displayDonations, setDisplayDonations] = useState([]);
  const [noDataFound, setNoDataFound] = useState("");
  const allDonations = useLoaderData();

  useEffect(() => {
    const storedDonationIds = getStoredDonations();

    if (storedDonationIds.length > 0) {
      const donated = allDonations.filter((donationId) =>
        storedDonationIds.includes(donationId.id)
      );

      setDisplayDonations(donated);
    } else {
      setNoDataFound("No Data Found");
    }
  }, [allDonations]);

  return (
    <div className="container mx-auto">
      <div>
        {noDataFound ? (
          <p>{noDataFound}</p>
        ) : (
          <div className="grid grid-cols-2 gap-6">
            {displayDonations.map((donatedCard) => (
              <DonatedCard
                key={donatedCard.id}
                donatedCard={donatedCard}
              ></DonatedCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Donation;
