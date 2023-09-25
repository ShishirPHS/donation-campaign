import PropTypes from "prop-types";
import DonationCard from "../DonationCard/DonationCard";

const AllDonations = ({ allDonations }) => {
  return (
    <div className="container mx-auto mt-28 mb-44">
      <div className="grid grid-cols-4 gap-6">
        {allDonations?.map((donation) => (
          <DonationCard key={donation.id} donation={donation}></DonationCard>
        ))}
      </div>
    </div>
  );
};

AllDonations.propTypes = {
  allDonations: PropTypes.array.isRequired,
};

export default AllDonations;
