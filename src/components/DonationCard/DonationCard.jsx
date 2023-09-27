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
          className="rounded-lg h-full"
        >
          <img
            className="w-full rounded-t-lg h-[180px] object-cover"
            src={image}
            alt={`Image for ${title}`}
          />
          <div className="p-4">
            <button
              style={{ backgroundColor: category_color, color: title_color }}
              className="text-left py-1 px-3 rounded text-sm font-medium"
            >
              {category}
            </button>
            <h3
              style={{ color: title_color }}
              className="mt-2 font-semibold text-xl"
            >
              {title}
            </h3>
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
