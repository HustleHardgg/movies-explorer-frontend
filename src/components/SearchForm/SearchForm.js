import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
  return (
    <section className="search">
      <form className="search-form">
        <div className="search-form__content">
          <img className="imgFind" alt="find" />
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            required
          />

          <button className="search-form__button" type="submit">
            Найти
          </button>
          <FilterCheckbox />
        </div>


      </form>
      <></>
    </section>
  );
};

export default SearchForm;
