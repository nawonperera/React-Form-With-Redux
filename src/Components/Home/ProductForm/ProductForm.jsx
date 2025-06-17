import ProductBasicDetailsForm from "./ProductBasicDetailsForm/ProductBasicDetailsForm.jsx";
import ProductWarrantyDetailsForm from "./ProductWarrantyDetailsForm/ProductWarrantyDetailsForm.jsx";
import { useState } from "react";

const ProductForm = () => {

  const [currentForm, setCurrentForm] = useState(1);

  const handleNextFormRendering = () => {
    setCurrentForm((prevState) => prevState+1)
  }

  const handleBackFormRendering = () => {
    setCurrentForm((prevState) => prevState-1)
  }

  const productsFormMapper = {
    1 : <ProductBasicDetailsForm handleNextFormRendering={handleNextFormRendering}/>,
    2 : <ProductWarrantyDetailsForm handleBackFormRendering={handleBackFormRendering}/>
  }

  const renderProductForms = ()=>{
    return productsFormMapper[currentForm]
  }

  return (
    <div className="mt-9">
      {renderProductForms()}
    </div>
  );
};

export default ProductForm;
