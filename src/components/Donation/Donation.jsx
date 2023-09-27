import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../Utility/LocalStorage";
import DonatedCard from "../DonatedCard/DonatedCard";

const Donation = () => {
  const [displayDonations, setDisplayDonations] = useState([]);
  const [noDataFound, setNoDataFound] = useState("");
  const [isShow, setIsShow] = useState(false);

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
          <div className="flex items-center justify-center h-[40vh]">
            <p className="text-3xl font-bold">{noDataFound}...</p>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-8 mb-10 px-5 lg:px-[10px]">
              {isShow
                ? displayDonations.map((donatedCard) => (
                    <DonatedCard
                      key={donatedCard.id}
                      donatedCard={donatedCard}
                    ></DonatedCard>
                  ))
                : displayDonations
                    .slice(0, 4)
                    .map((donatedCard) => (
                      <DonatedCard
                        key={donatedCard.id}
                        donatedCard={donatedCard}
                      ></DonatedCard>
                    ))}
            </div>
            {displayDonations.length > 4 && (
              <div className="text-center mb-40">
                <button
                  onClick={() => setIsShow(!isShow)}
                  className="py-4 px-8 text-white font-semibold bg-[#009444] rounded-lg"
                >
                  {isShow ? "See less" : "See All"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Donation;
