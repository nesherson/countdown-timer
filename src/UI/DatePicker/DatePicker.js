import { useEffect, useState } from 'react';
import Styled from 'styled-components';

const formatDate = (date) => {
  return new Date(date);
};

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

function dateDiffInDays(a, b) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

function toDateTime(secs) {
  var t = new Date(Date.UTC(1970, 0, 1)); // Epoch
  t.setUTCSeconds(secs);
  return t;
}

const DatePicker = () => {
  const [date, setDate] = useState('2021-06-12');

  const handleSetDate = (e) => {
    setDate(e.target.value);
  };

  const currentDate = Date.now();

  console.log('current date --> ', formatDate(currentDate).getTime());

  console.log('selected date --> ', formatDate(date).getTime());

  const minutes = Math.floor(
    Math.abs(formatDate(date) - formatDate(currentDate)) / 1000 / 60
  );
  const days = dateDiffInDays(formatDate(currentDate), formatDate(date));

  console.log('diff/days --> ', days);
  console.log('diff/min --> ', minutes);

  return (
    <div>
      <input type='date' value={date} onChange={handleSetDate} />
    </div>
  );
};

export default DatePicker;
