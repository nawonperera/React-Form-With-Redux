import InputField from "../../../common/form/InputField.jsx";
import PropTypes from "prop-types";
import FormHandlingButton from "../../../common/form/FormHandlingButton.jsx";
import FormHeading from "../../../common/form/FormHeading.jsx";

const ProductWarrantyDetailsForm = ({ handleBackFormRendering }) => {
    return (
        <form className="max-w-sm mx-auto">
            <button type="button" onClick={handleBackFormRendering}>
                Go Back
            </button>

            <FormHeading heading="Product Warranty Details" />

            <InputField
                type="text"
                name="warranty_period"
                labelName="Warranty Period"
            />
            <InputField
                type="date"
                name="warranty_start_date"
                labelName="Warranty Start Date"
            />
            <InputField
                type="date"
                name="warranty_end_date"
                labelName="Warranty End Date"
            />


        </form>
    );
};

ProductWarrantyDetailsForm.propTypes = {
    handleBackFormRendering: PropTypes.func.isRequired,
};
export default ProductWarrantyDetailsForm;
