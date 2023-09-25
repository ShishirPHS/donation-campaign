import PropTypes from "prop-types";

const DonatedCard = ({ donatedCard }) => {
  const { image, card_color } = donatedCard;

  return (
    <div>
      <div style={{ backgroundColor: card_color }} className="hero rounded-lg">
        <div className="flex flex-col lg:flex-row items-center justify-start">
          <div className="mr-6">
            <img src={image} className="rounded-l-lg h-full" />
          </div>
          <div className="py-6">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

DonatedCard.propTypes = {
  donatedCard: PropTypes.object.isRequired,
};

export default DonatedCard;
