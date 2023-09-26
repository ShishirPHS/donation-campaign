import PropTypes from "prop-types";
import DonationCard from "../DonationCard/DonationCard";

const AllDonations = ({ allDonations, searchValue }) => {
  const searchedCategoryData = allDonations.filter(
    (donation) => donation.category.toLowerCase() == searchValue.toLowerCase()
  );
  console.log(searchedCategoryData);
  return (
    <div className="container mx-auto mt-28 mb-44">
      <div className="grid grid-cols-4 gap-6">
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
