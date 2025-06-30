import PropTypes from "prop-types";

const InputField = ({ type, name, value, labelName, handleInputField }) => {
    return (
        <div className="mb-5">
            <label htmlFor={name} className="label-field">
                {labelName}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                className="input-field"
                defaultValue={value || ""}
                onChange={handleInputField}
                required
            />
        </div>
    );
};

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    labelName: PropTypes.string.isRequired,
    handleInputField: PropTypes.func.isRequired,
};

export default InputField;
