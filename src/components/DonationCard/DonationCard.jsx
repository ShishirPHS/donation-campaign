import PropTypes from "prop-types";

const DonationCard = ({ donation }) => {
  const { image, card_color, category, category_color, title_color } = donation;

  return (
    <div>
      <div
        style={{ backgroundColor: card_color }}
        className="card-compact rounded-lg"
      >
        <figure>
          <img className="w-full rounded-t-lg" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-start">
            <button
              style={{ backgroundColor: category_color, color: title_color }}
              className="text-left py-1 px-3 rounded "
            >
              {category}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default DonationCard;
