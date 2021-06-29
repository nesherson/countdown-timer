import { useState } from 'react';
import Styled from 'styled-components';

import DatePicker from '../../../UI/DatePicker/DatePicker';
import ColorPicker from '../../../UI/ColorPicker/ColorPicker';

const StyledDiv = Styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
`;

const CardWrapper = Styled.div`
    width: 420px;
    border-radius: 12px;
    background-color: #fff;
    box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.02),
  0 6.7px 5.3px rgba(0, 0, 0, 0.028),
  0 12.5px 10px rgba(0, 0, 0, 0.035),
  0 22.3px 17.9px rgba(0, 0, 0, 0.042),
  0 41.8px 33.4px rgba(0, 0, 0, 0.05),
  0 100px 80px rgba(0, 0, 0, 0.07)
;    

    @media only screen and (max-width: 510px) {
      width: 100%;
      margin: 0 3%;
    }
`;

const CardBody = Styled.div`
    height: 75%;
    padding: 10px 35px 30px 35px;
    @media only screen and (max-width: 768px) {
      padding: 10px 7% 30px 7%;
    }
    @media only screen and (max-width: 510px) {
      padding: 10px 5% 30px 5%;
    }
`;

const StyledHeader = Styled.h2`
    color: #434d56;
    font-weight: 400;
    border-bottom: 1px solid #96a2ac;
    padding: 15px 0 10px 0;
    margin-bottom: 25px;
`;

const CardFooter = Styled.footer`
    border-top: 1px solid #eaedfa;
    height: 10%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 35px 10px 35px;
`;

const Warning = Styled.span`
  display: block;
  color: #f96353;
  font-size: 0.9rem;
`;

const Input = Styled.input`
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

const Button = Styled.button`
  padding: 8px 18px;
  border: none;
  background-color: #2e48cd;
  border-top: 1px solid #acb7ec;
  color: #fff;
  border-radius: 5px;
  font-size: 0.88rem;
  font-weight: 500;
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

const AddEvent = ({ createEvent, handleShowSidebar }) => {
  const [eventName, setEventName] = useState('');
  const [selectedDate, setSelectedDate] = useState('2021-06-12');
  const [invalidDate, setInvalidDate] = useState(false);
  const [invalidName, setInvalidName] = useState(false);
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
      setInvalidDate(true);
      setInvalidName(false);
      return;
    }

    if (eventName.length < 1) {
      setInvalidName(true);
      setInvalidDate(false);
      return;
    }

    createEvent(eventName, eventTime, selectedDate, color);
    setInvalidDate(false);
    setInvalidName(false);
    setEventName('');
  };

  return (
    <>
      <StyledDiv>
        <CardWrapper>
          <CardBody>
            <StyledHeader>Create an Event</StyledHeader>
            <Input
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
            {invalidName ? <Warning>Empty Name Input!</Warning> : null}
            {invalidDate ? <Warning>Wrong Date!</Warning> : null}
          </CardBody>
          <CardFooter>
            <Button onClick={handleEventCreate}>Create</Button>
          </CardFooter>
        </CardWrapper>
      </StyledDiv>
    </>
  );
};

export default AddEvent;
