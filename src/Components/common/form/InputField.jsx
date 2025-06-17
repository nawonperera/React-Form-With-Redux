import PropTypes from "prop-types";

const InputField = ({ type, name, labelName }) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className="label-field"
      >
        {labelName}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="input-field"
        required
      />
    </div>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
};

export default InputField;
