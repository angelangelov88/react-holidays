import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="CardWrapper">
      <div>
        {props.name}
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired
};

export default Card;