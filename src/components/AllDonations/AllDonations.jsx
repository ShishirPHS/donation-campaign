import PropTypes from "prop-types";
import DonationCard from "../DonationCard/DonationCard";

const AllDonations = ({ allDonations, searchValue }) => {
  const searchedCategoryData = allDonations.filter(
    (donation) => donation.category.toLowerCase() == searchValue.toLowerCase()
  );

  return (
    <div className="container mx-auto mt-28 mb-44 px-5 lg:px-[10px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 2xl:gap-6">
        {searchedCategoryData.length > 0
          ? searchedCategoryData?.map((donation) => (
              <DonationCard
                key={donation.id}
                donation={donation}
              ></DonationCard>
            ))
          : allDonations?.map((donation) => (
              <DonationCard
                key={donation.id}
                donation={donation}
              ></DonationCard>
            ))}
      </div>
    </div>
  );
};

AllDonations.propTypes = {
  allDonations: PropTypes.array.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default AllDonations;
