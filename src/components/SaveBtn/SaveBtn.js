import React from "react";
import "./SaveBtn.css";

function SaveBtn({ onClick, isSavedMovie }) {
  return (
    <button
      type="button"
      className={
        !isSavedMovie
          ? "movies-card__content-btn-save"
          : "movies-card__content-btn-save-active"
      }
      onClick={onClick}
    ></button>
  );
}

export default SaveBtn;
