import PropTypes from "prop-types";

const FormHeading = ({ heading }) => {
    return (
        <div className="mb-[10px]">
            <h1 className="text-lg font-bold underline">{heading}</h1>
        </div>
    );
};

FormHeading.propTypes = {
    heading: PropTypes.string.isRequired,
};

export default FormHeading;
