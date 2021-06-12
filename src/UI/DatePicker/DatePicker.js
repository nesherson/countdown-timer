import { useEffect, useState } from 'react';
import Styled from 'styled-components';

const DatePicker = ({date, handleSelectedDate}) => {

  const handleSetDate = (e) => {
    handleSelectedDate(e.target.value);
  };

  return (
    <div>
      <input type='date' value={date} onChange={handleSetDate} />
    </div>
  );
};

export default DatePicker;
