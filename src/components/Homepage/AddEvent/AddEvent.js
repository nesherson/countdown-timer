import { useState } from "react";
import Styled from "styled-components";

import DatePicker from "../../../UI/DatePicker/DatePicker";
import ColorPicker from "../../../UI/ColorPicker/ColorPicker";

const Container = Styled.div`
  display: flex;
  flex-direction: column;
`;

// const CardWrapper = Styled.div`
//     width: 420px;
//     border-radius: 12px;
//     background-color: #fff;
//     box-shadow:
//   0 2.8px 2.2px rgba(0, 0, 0, 0.02),
//   0 6.7px 5.3px rgba(0, 0, 0, 0.028),
//   0 12.5px 10px rgba(0, 0, 0, 0.035),
//   0 22.3px 17.9px rgba(0, 0, 0, 0.042),
//   0 41.8px 33.4px rgba(0, 0, 0, 0.05),
//   0 100px 80px rgba(0, 0, 0, 0.07)
// ;

//     @media only screen and (max-width: 510px) {
//       width: 100%;
//       margin: 0 3%;
//     }
// `;

const CardBody = Styled.div`
    margin: 0 0 25px 0;
`;

const StyledHeader = Styled.h2`
    color: #434d56;
    font-weight: 400;
    border-bottom: 1px solid #96a2ac;
    padding: 0 0 10px 0;
    margin: 0 0 25px 0;
`;

const CardFooter = Styled.div`
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid #eaedfa;
    padding: 15px 0 0 0;
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

const ButtonPrimary = Styled.button`
  padding: 8px 18px;
  border: none;
  background: rgb(12,28,63);
  background: linear-gradient(90deg, rgba(12,28,63,1) 10%, rgba(16,38,76,1) 39%, rgba(22,54,96,0.9808123933167017) 98%);
  color: #fff;
  border-radius: 5px;
  font-size: 0.88rem;
  font-weight: 500;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background: rgb(12,28,63);
    background: linear-gradient(90deg, rgba(12,28,63,0.92) 10%, rgba(16,38,76,0.86) 39%, rgba(22,54,96,0.82) 98%);
  }
`;

const ButtonGhost = Styled.button`
  padding: 8px 18px;
  border: none;
  background-color: transparent;
  border: 1px solid #acb7ec;
  color: #000;
  border-radius: 5px;
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #acb7ec;
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

const AddEvent = ({ createEvent, closeModal }) => {
  const [eventName, setEventName] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [invalidDate, setInvalidDate] = useState(false);
  const [invalidName, setInvalidName] = useState(false);
  const [color, setColor] = useState("rgba(249, 55, 28, 1)");

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
    setEventName("");

    closeModal();
  };

  return (
    <>
      <Container>
        <CardBody>
          <StyledHeader>Create an Event</StyledHeader>
          <Input
            type="text"
            value={eventName}
            onChange={handleEventNameOnChange}
            placeholder="Title"
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
          <ButtonGhost onClick={closeModal}>Cancel</ButtonGhost>
          <ButtonPrimary onClick={handleEventCreate}>Create</ButtonPrimary>
        </CardFooter>
      </Container>
    </>
  );
};

export default AddEvent;
