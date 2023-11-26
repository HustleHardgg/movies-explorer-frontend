import React from 'react';
import './MenuBtnMobile.css';

function MenuBtnMobile({ handleClick, isOpen }) {
  return (
<>
      <button
          className={
      !isOpen
            ? 'menu-btn-mobile'
            : 'menu-btn-mobile menu-btn-mobile-invisible'
          }

        type='button'
        onClick={handleClick}
      >
      </button>
</>
  )
}


export default MenuBtnMobile;