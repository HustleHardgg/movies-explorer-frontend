import React from 'react';
import './MenuBtnMobile.css';

function MenuBtnMobile({ handleClick, isOpen }) {
  return (
<>
      <button
          className={
      !isOpen
            ? 'menu__btn-mobile'
            : 'menu__btn-mobile menu__btn-mobile-invisible'
          }

        type='button'
        onClick={handleClick}
      >
      </button>
</>
  )
}


export default MenuBtnMobile;