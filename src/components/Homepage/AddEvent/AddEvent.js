import { useState } from 'react';
import Styled from 'styled-components';

import DatePicker from '../../../UI/DatePicker/DatePicker';
import ColorPicker from '../../../UI/ColorPicker/ColorPicker';

const StyledDiv = Styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = Styled.div`
    width: 350px;
    height: 400px;
    border: 1px solid #96a2ac;
    padding: 30px 35px 20px 35px;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 2px #d9d9d9;
`;

const StyledHeader = Styled.h2`
    color: #96a2ac;
    font-weight: 400;
    border-bottom: 1px solid #96a2ac;
    padding: 15px 0;
    margin-bottom: 35px;
`;

const Warning = Styled.span`
  display: block;
  color: #f96353;
  font-size: 0.9rem;
`;

const StyledInput = Styled.input`
  display: block;
  width: 100%;
  margin-bottom: 12px;
  font-size: 1.25rem;
  border: none;
  padding: 8px 0;
  border-bottom: 1px solid #000;

  &:focus {
    border-bottom: 1px solid #2e48cd;
    outline: none;
  }
`;

const formatDate = (date) => {
  return new Date(date);
};

const formatSelectedDate = (date) => {
  const updatedDate = new Date(date);
  return new Date(
    updatedDate.getFullYear(),
    updatedDate.getMonth(),
    updatedDate.getDate(),
    0,
    0,
    0,
    0
  );
};

function secondsToDhms(seconds) {
  const tempSeconds = Number(seconds);
  const d = Math.floor(tempSeconds / (3600 * 24));
  const h = Math.floor((tempSeconds % (3600 * 24)) / 3600);
  const m = Math.floor((tempSeconds % 3600) / 60);
  const s = Math.floor(tempSeconds % 60);

  return {
    days: d,
    hours: h,
    minutes: m,
    seconds: s,
  };
}

const getTimeBetweenDates = (dateInitial, dateFinal) => {
  if ((formatSelectedDate(dateFinal) - formatDate(dateInitial)) / 1000 < 0) {
    return null;
  }

  return secondsToDhms(
    (formatSelectedDate(dateFinal) - formatDate(dateInitial)) / 1000
  );
};

const AddEvent = ({ createEvent }) => {
  const [eventName, setEventName] = useState('');
  const [selectedDate, setSelectedDate] = useState('2021-06-12');
  const [invalidInput, setInvalidInput] = useState(false);
  const [color, setColor] = useState('#f9371c');

  const handleEventNameOnChange = (e) => {
    setEventName(e.target.value);
  };

  const handleSelectedDate = (date) => {
    setSelectedDate(date);
  };

  const handleSelectedColor = (color) => {
    setColor(color);
  };

  const handleEventCreate = () => {
    const currentDate = Date.now();
    const eventTime = getTimeBetweenDates(currentDate, selectedDate);
    if (!eventTime) {
      setInvalidInput(true);
      return;
    }
    console.log('currentDate: ', formatDate(currentDate));
    console.log('selectedDate: ', formatSelectedDate(selectedDate));
    console.log('eventTime: ', eventTime);

    createEvent(eventName, eventTime, selectedDate, color);
    setInvalidInput(false);
    setEventName('');
  };

  return (
    <StyledDiv>
      <CardWrapper>
        <StyledHeader>Create an Event</StyledHeader>
        <StyledInput
          type='text'
          value={eventName}
          onChange={handleEventNameOnChange}
          placeholder='Title'
        />
        <ColorPicker handleColor={handleSelectedColor} />
        <DatePicker
          date={selectedDate}
          handleSelectedDate={handleSelectedDate}
        />

        {invalidInput ? <Warning>Wrong Date!</Warning> : null}
        <button onClick={handleEventCreate}>Create</button>
      </CardWrapper>
    </StyledDiv>
  );
};

export default AddEvent;
