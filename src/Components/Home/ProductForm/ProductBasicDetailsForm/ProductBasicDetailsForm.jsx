import InputField from "../../../common/form/InputField.jsx";
import PropTypes from "prop-types";
import FormHandlingButton from "../../../common/form/FormHandlingButton.jsx";
import FormHeading from "../../../common/form/FormHeading.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
    resetProductBasicDetails,
    storeProductBasicDetails,
} from "../../../../utilities/slices/productBasicDetailsSlice.js";
import { useEffect, useState } from "react";

const ProductBasicDetailsForm = ({
    productBasicDetails,
    setProductBasicDetails,
    handleNextFormRendering,
}) => {
    const [existingProductDetails, setExistingProductDetails] = useState({});

    const dispatch = useDispatch();

    const alreadyAddedProductDetails = useSelector(
        (state) => state.productDetails.product.productBasicDetails,
    );

    useEffect(() => {
        setExistingProductDetails(alreadyAddedProductDetails);
    }, [alreadyAddedProductDetails]);

    const handleInputField = (event) => {
        const { name, value } = event.target;
        //console.log(name, value);

        setProductBasicDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (productBasicDetails.product_name !== "") {
            dispatch(storeProductBasicDetails(productBasicDetails));
            handleNextFormRendering();
            return;
        }
        dispatch(storeProductBasicDetails(existingProductDetails));
        handleNextFormRendering();
    };

    //console.log(existingProductDetails);

    const handleReset = () => {
        dispatch(resetProductBasicDetails());
    };

    return (
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
            <FormHeading heading="Product Basic details" />

            <InputField
                type="text"
                name="product_name"
                labelName="Product Name"
                value={existingProductDetails.product_name}
                handleInputField={handleInputField}
            />
            <InputField
                type="number"
                name="product_quantity"
                labelName="Product Quantity"
                value={existingProductDetails.product_quantity}
                handleInputField={handleInputField}
            />
            <InputField
                type="number"
                name="product_price"
                labelName="Product Price"
                value={existingProductDetails.product_price}
                handleInputField={handleInputField}
            />

            <div className="flex justify-between">
                <button
                    className="text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    type="button"
                    onClick={handleReset}
                >
                    Reset
                </button>

                <FormHandlingButton
                    buttonName="Fill Warranty Details"
                    type="submit"
                    btnStyle="text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                />
            </div>
        </form>
    );
};

ProductBasicDetailsForm.propTypes = {
    productBasicDetails: PropTypes.object.isRequired,
    setProductBasicDetails: PropTypes.func.isRequired,
    handleNextFormRendering: PropTypes.func.isRequired,
};

export default ProductBasicDetailsForm;
