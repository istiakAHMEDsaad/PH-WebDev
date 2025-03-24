import PropTypes from 'prop-types';

const ButtonCommon = ({ height, width, color, text }) => {
  return (
    <button
      className={`py-${height} px-${width} bg-${color} rounded-md border border-gray-500`}
    >
      {text}
    </button>
  );
};

ButtonCommon.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
  text: PropTypes.string,
};

export default ButtonCommon;
