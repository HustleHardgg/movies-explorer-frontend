import React from "react";
import "./FilterCheckbox.css";

const FilterCheckbox = ({ checkboxValue, setCheckboxValue }) => {

  const onChange = (e) => {
    if (setCheckboxValue) {
      setCheckboxValue(e.target.checked)
    }
  }

  return (
    <div className="checkbox">
      <input type="checkbox" checked={checkboxValue} onChange={onChange} className="checkbox__btn" />
      <p className="checkbox__btn-text">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
