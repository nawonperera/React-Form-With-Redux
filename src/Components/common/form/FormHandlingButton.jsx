import PropTypes from "prop-types";

const FormHandlingButton = ({ buttonName, btnStyle }) => {
    return (
        <button type="submit" className={btnStyle}>
            {buttonName}
        </button>
    );
};

FormHandlingButton.propTypes = {
    buttonName: PropTypes.string.isRequired,
    btnStyle: PropTypes.string.isRequired,
};
export default FormHandlingButton;
