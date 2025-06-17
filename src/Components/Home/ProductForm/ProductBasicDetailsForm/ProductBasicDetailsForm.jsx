import InputField from "../../../common/form/InputField.jsx";
import PropTypes from "prop-types";
import FormHandlingButton from "../../../common/form/FormHandlingButton.jsx";
import FormHeading from "../../../common/form/FormHeading.jsx";

const ProductBasicDetailsForm = ({ handleNextFormRendering }) => {
    return (
        <form className="max-w-sm mx-auto">

            <FormHeading heading="Product Basic details" />

            <InputField
                type="text"
                name="product_name"
                labelName="Product Name"
            />
            <InputField
                type="number"
                name="product_quatity"
                labelName="Product Quantity"
            />
            <InputField
                type="number"
                name="product_price"
                labelName="Product Price"
            />

            <FormHandlingButton
                executingMethod={handleNextFormRendering}
                buttonName="Fill Warranty Details"
                btnStyle="text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            />
        </form>
    );
};

ProductBasicDetailsForm.propTypes = {
    handleNextFormRendering: PropTypes.func.isRequired,
};

export default ProductBasicDetailsForm;
