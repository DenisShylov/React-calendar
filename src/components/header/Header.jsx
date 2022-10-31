import React from 'react';
import { months } from '../../utils/dateUtils.js';
import './header.scss';
import Modal from '../modal/Modal.jsx';

const Header = ({ openModal, weekStartDate, getCurrentDay, switchWeeks }) => {
  return (
    <header className="header">
      <button className="button create-event-btn" onClick={openModal}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button
          className="navigation__today-btn button"
          onClick={getCurrentDay}
        >
          Today
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={switchWeeks}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={switchWeeks}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">
          {months[weekStartDate.getMonth()]}
        </span>
      </div>
    </header>
  );
};

export default Header;
