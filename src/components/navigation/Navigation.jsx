import React from 'react';

import { days } from '../../utils/dateUtils.js';

let className = 'day-label__day-number';

const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => {
        dayDate.toDateString() === new Date().toDateString()
          ? (className += ' active')
          : (className = 'day-label__day-number');

        return (
          <div className="calendar__day-label day-label">
            <span className="day-label__day-name">
              {days[dayDate.getDay()]}
            </span>
            <span className={className}>{dayDate.getDate()}</span>
          </div>
        );
      })}
    </header>
  );
};

export default Navigation;
