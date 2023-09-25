import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
  const {
    id,
    title,
    image,
    card_color,
    category,
    category_color,
    title_color,
  } = donation;

  return (
    <div>
      <Link to={`/donationDetails/${id}`}>
        <div
          style={{ backgroundColor: card_color }}
          className="card-compact rounded-lg"
        >
          <figure>
            <img
              className="w-full rounded-t-lg"
              src={image}
              alt={`Image for ${title}`}
            />
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
      </Link>
    </div>
  );
};

DonationCard.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default DonationCard;
