import React, { Component, useEffect, useState } from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import events from '../../gateway/events';
import './calendar.scss';
import RedLine from '../redLine/RedLine';

// class Calendar extends Component {
//   state = {
//     events,
//   };

//   render() {
//     const { weekDates } = this.props;

//     return (
//       <section className="calendar">
//         <Navigation weekDates={weekDates} />
//         <div className="calendar__body">
//           <div className="calendar__week-container">
//             <Sidebar />
//             <Week weekDates={weekDates} events={this.state.events} />
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

const Calendar = ({ weekDates }) => {
  const [stateEvents, setStateEvents] = useState([
    {
      id: 1,
      title: 'Go to the gym',
      description: 'some text here',
      dateFrom: new Date(2020, 8, 15, 10, 15),
      dateTo: new Date(2020, 8, 15, 15, 0),
    },
    {
      id: 2,
      title: 'Go to the school',
      description: 'hello, 2 am',
      dateFrom: new Date(2020, 8, 16, 10, 15),
      dateTo: new Date(2020, 8, 16, 11, 0),
    },
    {
      id: 3,
      title: 'Lunch',
      description: '',
      dateFrom: new Date(2020, 8, 17, 10, 30),
      dateTo: new Date(2020, 8, 17, 11, 30),
    },
    {
      id: 4,
      title: 'Meet friend',
      description: 'at the cafe',
      dateFrom: new Date(2020, 8, 25, 10, 30),
      dateTo: new Date(2020, 8, 25, 11, 0),
    },
  ]);

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week weekDates={weekDates} events={stateEvents} />
        </div>
      </div>
    </section>
  );
};
export default Calendar;
