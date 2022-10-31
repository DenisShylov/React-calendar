import React, { useEffect, useState } from 'react';
import './RedLine.scss';

const RedLine = () => {
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  useEffect(() => {
    setInterval(() => {
      setMinutes(new Date().getMinutes());
    }, 1000);
  });
  return <div className="red_time-line" style={{ top: minutes }}></div>;
};

export default RedLine;
