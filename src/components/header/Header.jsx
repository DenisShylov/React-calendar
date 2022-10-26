import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './header.scss';

const format = 'MMMM';

const Header = () => {
  const [month, setMonth] = useState(moment());

  const getCurrentDay = (e) => {
    if (e.target.classList.contains('navigation__today-btn')) {
      setMonth(moment());
      console.log('current', month);
    }
  };

  const switchWeeks = (e) => {
    if (e.target.classList.contains('fa-chevron-left')) {
      setMonth(month.subtract(7, 'day'));
      console.log(month);
    } else if (e.target.classList.contains('fa-chevron-right')) {
      setMonth(month.add(7, 'day'));
      console.log(month);
    }
  };
  return (
    <header className="header">
      <button className="button create-event-btn">
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
          {month.format('MMMM')}
        </span>
      </div>
    </header>
  );
};

export default Header;
