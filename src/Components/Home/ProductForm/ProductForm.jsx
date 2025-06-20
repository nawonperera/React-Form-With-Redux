import ProductBasicDetailsForm from "./ProductBasicDetailsForm/ProductBasicDetailsForm.jsx";
import ProductWarrantyDetailsForm from "./ProductWarrantyDetailsForm/ProductWarrantyDetailsForm.jsx";
import { useState } from "react";

const ProductForm = () => {
    const [currentForm, setCurrentForm] = useState(1);
    const [productBasicDetails, setProductBasicDetails] = useState({
        product_name: "",
        product_quantity: 0,
        product_price: 0,
    });

    const handleNextFormRendering = () => {
        setCurrentForm((prevState) => prevState + 1);
    };

    const handleBackFormRendering = () => {
        setCurrentForm((prevState) => prevState - 1);
    };

    const productsFormMapper = {
        1: (
            <ProductBasicDetailsForm
                productBasicDetails={productBasicDetails}
                setProductBasicDetails={setProductBasicDetails}
                handleNextFormRendering={handleNextFormRendering}
            />
        ),
        2: (
            <ProductWarrantyDetailsForm
                handleBackFormRendering={handleBackFormRendering}
            />
        ),
    };

    const renderProductForms = () => {
        return productsFormMapper[currentForm];
    };

    return <div className="mt-9">{renderProductForms()}</div>;
};

export default ProductForm;
