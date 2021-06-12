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

const AddEvent = ({ createEvent }) => {
  const [eventName, setEventName] = useState('');
  const [selectedDate, setSelectedDate] = useState('2021-06-12');


  const handleEventNameOnChange = (e) => {
    setEventName(e.target.value);
  };

  const handleEventCreate = () => {
    const currentDate = Date.now();
    const eventTime = getTimeBetweenDates(currentDate, selectedDate);
    createEvent(eventName, eventTime, selectedDate);
    setEventName('');
  };

  const handleSelectedDate = (date) => {
    setSelectedDate(date);
  };

  //console.log('AddEvent/time --> ', getTimeBetweenDates(currentDate, selectedDate));

  return (
    <CardWrapper>
      <StyledHeader>Create an Event</StyledHeader>
      <DatePicker date={selectedDate} handleSelectedDate={handleSelectedDate}/>
      <input type='text' value={eventName} onChange={handleEventNameOnChange} />
      <button onClick={handleEventCreate}>Create</button>
    </CardWrapper>
  );
};

export default AddEvent;
