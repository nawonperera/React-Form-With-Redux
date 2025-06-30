import InputField from "../../../common/form/InputField.jsx";
import PropTypes from "prop-types";
import FormHeading from "../../../common/form/FormHeading.jsx";
import backBtn from "../../../../assets/icons/back-button.png";
import FormHandlingButton from "../../../common/form/FormHandlingButton.jsx";

const ProductWarrantyDetailsForm = ({ handleBackFormRendering }) => {
    return (
        <form className="max-w-sm mx-auto">
            <button type="button" onClick={handleBackFormRendering}>
                <img src={backBtn} alt="back button" />
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
            <FormHandlingButton
                buttonName="Submit"
                type="button"
                btnStyle="text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            />
        </form>
    );
};

ProductWarrantyDetailsForm.propTypes = {
    handleBackFormRendering: PropTypes.func.isRequired,
};
export default ProductWarrantyDetailsForm;
