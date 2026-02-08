import React, { useState, useEffect } from 'react';

const formatDateTime = (d) => {
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  const day = days[d.getDay()];
  const month = months[d.getMonth()];
  const date = d.getDate();
  let hours = d.getHours();
  const minutes = d.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours === 0 ? 12 : hours;
  const mins = String(minutes).padStart(2, '0');
  return `${day} ${month} ${date} ${hours}:${mins} ${ampm}`;
};

const DateTime = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return <div className='date-time'>{formatDateTime(now)}</div>;
};

export default DateTime;
