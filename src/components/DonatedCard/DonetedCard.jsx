import PropTypes from "prop-types";
import { BsCurrencyDollar } from "react-icons/bs";

const DonatedCard = ({ donatedCard }) => {
  const {
    title,
    image,
    card_color,
    category,
    category_color,
    title_color,
    price,
  } = donatedCard;

  return (
    <div style={{ backgroundColor: card_color }} className="rounded-lg">
      <div className="flex">
        <div className="mr-6 rounded-l-lg">
          <img
            className="rounded-l-lg"
            src={image}
            alt={`image for ${title}`}
          />
        </div>
        <div className="py-6">
          <button
            style={{ backgroundColor: category_color, color: title_color }}
            className="py-1 px-3 rounded text-sm"
          >
            {category}
          </button>
          <h3 className="text-[#0B0B0B] text-2xl font-semibold my-2">
            {title}
          </h3>
          <p
            className="font-semibold flex items-center"
            style={{ color: title_color }}
          >
            <BsCurrencyDollar></BsCurrencyDollar>
            {price}
          </p>
          <button
            style={{ backgroundColor: title_color }}
            className="py-2 px-4 text-white font-semibold text-lg rounded mt-5"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

DonatedCard.propTypes = {
  donatedCard: PropTypes.object.isRequired,
};

export default DonatedCard;
