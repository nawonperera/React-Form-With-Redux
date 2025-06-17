import InputField from "../../../common/form/InputField.jsx";
import PropTypes from "prop-types";
import FormHandlingButton from "../../../common/form/FormHandlingButton.jsx";
import FormHeading from "../../../common/form/FormHeading.jsx";

const ProductWarrantyDetailsForm = ({ handleBackFormRendering }) => {
    return (
        <form className="max-w-sm mx-auto">
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

            <FormHandlingButton
                executingMethod={handleBackFormRendering}
                buttonName="Back To Basic Details"
                btnStyle="text-white bg-gray-700 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            />
        </form>
    );
};

ProductWarrantyDetailsForm.propTypes = {
    handleBackFormRendering: PropTypes.func.isRequired,
};
export default ProductWarrantyDetailsForm;
