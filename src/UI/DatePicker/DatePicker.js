import { useEffect, useState } from 'react';
import Styled from 'styled-components';

const formatDate = (date) => {
  return new Date(date);
};

const formatSelectedDate = (date) => {
  const updatedDate = new Date(date);
  return new Date(updatedDate.getFullYear(), updatedDate.getMonth(), updatedDate.getDate(), 0, 0, 0, 0);
}

function secondsToDhms(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600*24));
  var h = Math.floor(seconds % (3600*24) / 3600);
  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 60);
  
  // var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  // var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  // var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  // var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  // return dDisplay + hDisplay + mDisplay + sDisplay;
  return {
    days: d,
    hours: h,
    minutes: m,
    seconds: s
  };
  }

  const getTimeBetweenDates = (current, selected) => {
    const currentSec = formatDate(current).getTime();
    const selectedSec = formatSelectedDate(selected).getTime();
  
    const seconds = Math.abs((selectedSec - currentSec)/1000);

    return secondsToDhms(seconds);
  }

const DatePicker = () => {
  const [date, setDate] = useState('2021-06-12');

  const handleSetDate = (e) => {
    setDate(e.target.value);
  };

  const currentDate = Date.now();

 

  console.log(getTimeBetweenDates(currentDate, date));



  return (
    <div>
      <input type='date' value={date} onChange={handleSetDate} />
    </div>
  );
};

export default DatePicker;
