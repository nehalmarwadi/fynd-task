import React from "react";
import "../Faq/FaqItem.scss";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="faq-item">
      <div className="faq-custom" onClick={toggleAccordion}>
        <h4 className="heading-faq ">{item.question}</h4>
        <div className={isOpen ? "inlinefaqactive inlinefaq" : "inlinefaq"}>
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      {isOpen &&
      (
        <div className="div-faq ">
          <p className="p-faq ">
            {item.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
