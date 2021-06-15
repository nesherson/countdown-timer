import { useState } from 'react';
import Styled from 'styled-components';

import DatePicker from '../../../UI/DatePicker/DatePicker';

const CardWrapper = Styled.div`
    margin: 25px;
    width: 250px;
    border: 1px solid #96a2ac;
    padding: 30px 25px 20px 25px;
    border-radius: 5px;
    box-shadow: 1px 1px 2px 2px #d9d9d9;
`;

const CardDetails = Styled.div`
    text-align: center;
`;

const StyledHeader = Styled.h2`
    color: #96a2ac;
    font-weight: 400;
    border-bottom: 1px solid #96a2ac;
    padding: 15px 0;
`;

const EventName = Styled.h3`
    color: #7e8e9a;
    font-size: 1.05rem;
    padding: 0;
    margin: 0;
`;

const StyledDate = Styled.span`
     color: #96a2ac;
     font-size: 0.8rem;
     border-bottom: 1px solid #96a2ac;
     display: block;
     padding: 0 0 15px 0;
`;

const StyledSpan = Styled.span`
    color: #96a2ac;
    padding: 15px 0 0 0;
    display: block;
`;

const Warning = Styled.span`
  display: block;
  color: #f96353;
  font-size: 0.9rem;
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

  const handleEventNameOnChange = (e) => {
    setEventName(e.target.value);
  };

  const handleSelectedDate = (date) => {
    setSelectedDate(date);
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

    createEvent(eventName, eventTime, selectedDate);
    setInvalidInput(false);
    setEventName('');
  };

  return (
    <CardWrapper>
      <StyledHeader>Create an Event</StyledHeader>
      <DatePicker date={selectedDate} handleSelectedDate={handleSelectedDate} />
      <input type='text' value={eventName} onChange={handleEventNameOnChange} />
      {invalidInput ? <Warning>Wrong Date!</Warning> : null}
      <button onClick={handleEventCreate}>Create</button>
    </CardWrapper>
  );
};

export default AddEvent;
