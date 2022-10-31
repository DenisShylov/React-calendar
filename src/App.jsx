import React, { useEffect, useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';
import Modal from './components/modal/Modal.jsx';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [isOpenModal, setIsOpenModal] = useState(false);
  const getCurrentDay = (e) => {
    if (e.target.classList.contains('navigation__today-btn')) {
      setWeekStartDate(new Date());
    }
  };

  const switchWeeks = (e) => {
    if (e.target.classList.contains('fa-chevron-left')) {
      setWeekStartDate(
        new Date(weekStartDate.getTime() - 7 * (24 * 60 * 60 * 1000))
      );
    } else if (e.target.classList.contains('fa-chevron-right')) {
      setWeekStartDate(
        new Date(weekStartDate.getTime() + 7 * (24 * 60 * 60 * 1000))
      );
    }
  };

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const openModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      {isOpenModal ? <Modal openModal={openModal} /> : ''};
      <Header
        openModal={openModal}
        weekStartDate={weekStartDate}
        getCurrentDay={getCurrentDay}
        switchWeeks={switchWeeks}
      />
      <Calendar weekDates={weekDates} />
    </>
  );
};
// class App extends Component {
//   state = {
//     weekStartDate: new Date(),
//   };

//   render() {
//     const { weekStartDate } = this.state;
//     const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

//     return (
//       <>
//         <Header />
//         <Calendar weekDates={weekDates} />
//       </>
//     );
//   }
// }

export default App;
