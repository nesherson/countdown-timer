import { useEffect, useState } from "react";
import Styled from "styled-components";

import { getLocaleDateString, getTimeBetweenDates, defaultDateOptions, defaultDateTimeOptions } from "src/util/date";

import DatePicker from "src/UI/datePicker/DatePicker";
import ColorPicker from "src/UI/colorPicker/ColorPicker";

const Container = Styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
`;

const CardHeader = Styled.div`
  color: #434d56;
  font-weight: 500;
  font-size: 1.4rem;
  padding: 14px 16px;
`;

const CardBody = Styled.div`
    margin: 0 0 10px 0;
    padding: 0 16px;
`;

const CardFooter = Styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #eaedfa;
  padding: 14px 16px 14px 16px;
`;

const Warning = Styled.span`
  display: block;
  color: #f96353;
  font-size: 0.9rem;
`;

const Input = Styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  font-size: 1rem;
  padding: 8px;
  border: 1px solid rgba(184, 192, 199, 0.6);
  border-radius: 4px;

  &:focus {
    border: 1px solid rgba(46, 72, 205, 0.6);
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
  border: 1px solid #d3d9de;
  color: #000;
  border-radius: 5px;
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #f0f2f4;
  }
`;

const Label = Styled.label`
    color: #4f5a64;
    font-weight: 500;
    margin: 0 10px 0 0 ;
    padding: 0;
    font-size: 0.9rem;
`;

  const FormLayoutElement = Styled.div`
  margin: 10px 0;
`;

function EditEvent({ editEvent, closeModal, eventToEdit, isOpen }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [color, setColor] = useState(eventToEdit.color);
  const [useTime, setUseTime] = useState(false);

  const [invalidDate, setInvalidDate] = useState(false);
  const [invalidTime, setInvalidTime] = useState(false);
  const [invalidTitle, setInvalidTitle] = useState(false);

  const handleTitleOnChange = (e) => setTitle(e.target.value);
  const handleDateOnChange = (date) => setDate(date);
  const handleColorOnChange = (color) => setColor(color);
  const handleTimeOnChange = (e) => setTime(e.target.value);
  const handleUseTimeOnChange = (e) => {
    const checked = e.target.checked; 
    if (checked === false) {
      setTime("");
    }
    setUseTime(checked);
  }

  const handleEventEdit = () => {
    const currentDate = Date.now();
    let endDate = date;

    if (useTime) endDate = `${date} ${time}`;

    const timer = getTimeBetweenDates(currentDate, endDate);

    if (!timer) {
      setInvalidDate(true);
      setInvalidTitle(false);
      return;
    }

    if (title.length < 1) {
      setInvalidTitle(true);
      setInvalidDate(false);
      return;
    }

    if (!time) {
      setInvalidTime(true);
      return;
    }

    let displayDate = getLocaleDateString(date, undefined, defaultDateOptions);
    if (time) 
      displayDate = getLocaleDateString(`${date} ${time}`, undefined, defaultDateTimeOptions);

    eventToEdit.title = title;
    eventToEdit.date = date;
    eventToEdit.displayDate = displayDate;
    eventToEdit.timer = timer;
    eventToEdit.time = time;
    eventToEdit.color = color;
    editEvent(eventToEdit);
    setInvalidDate(false);
    setInvalidTitle(false);

    closeModal();
  };

  useEffect(() => {
    if (eventToEdit && isOpen === true) {
      setTitle(eventToEdit.title);
      setColor(eventToEdit.color);
      setDate(eventToEdit.date);

      if (eventToEdit.time) {
        setTime(eventToEdit.time);
        setUseTime(true);
      }
        
    } 
  }, [eventToEdit, isOpen]);

  return (
    <>
      <Container>
        <CardHeader>Edit an Event</CardHeader>
        <CardBody>
          <FormLayoutElement>
            <Label>Title</Label>
            <Input
              type="text"
              value={title}
              onChange={handleTitleOnChange}
              placeholder="Title"
            />
          </FormLayoutElement>
          <FormLayoutElement>
            <DatePicker
              date={date}
              onChange={handleDateOnChange}
            />
          </FormLayoutElement>
          <FormLayoutElement>
            <input
              type="checkbox"
              id="use-time-checkbox"
              checked={useTime}
              onChange={handleUseTimeOnChange}
            />
            <label htmlFor="use-time-checkbox">Use time</label>
          </FormLayoutElement>
          {useTime && (
            <FormLayoutElement>
              <Input type="time" value={time} onChange={handleTimeOnChange} />
            </FormLayoutElement>
          )}
          <FormLayoutElement>
            <ColorPicker color={color} onChange={handleColorOnChange} />
          </FormLayoutElement>
            {invalidTitle && <Warning>Empty Title Input</Warning>}
            {invalidDate && <Warning>Invalid Date</Warning>}
            {invalidTime && <Warning>Invalid Time</Warning>}
        </CardBody>
        <CardFooter>
          <ButtonGhost onClick={closeModal}>Cancel</ButtonGhost>
          <ButtonPrimary onClick={handleEventEdit}>Save</ButtonPrimary>
        </CardFooter>
      </Container>
    </>
  );
};

export default EditEvent;
