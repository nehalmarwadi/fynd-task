import React from "react";
import { faqs } from "./../../assets/data/faqs";
import FaqItem from "./FaqItem";
import '../Faq/FaqList.scss'

const FaqList = () => {
  return (
    <ul className="faq-list">
      {faqs.map((item, index) => {
        return <FaqItem item={item} key={index} />;
      })}
    </ul>
  );
};

export default FaqList;
