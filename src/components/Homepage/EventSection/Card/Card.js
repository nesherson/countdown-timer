import { useEffect, useState } from "react";
import Styled from "styled-components";

import { setAlpha } from "../../../../util/helpers";

import Counter from "../../../../UI/Counter/Counter";
import styled from "styled-components";

const CardWrapper = Styled.div`
    margin: 25px 25px 0 0;
    min-width: 300px;
    max-width: 320px;
    padding: 30px 25px 30px 25px;
    border-radius: 12px;
    background-color: #fff;
    box-shadow:
  0px 2px 6px -9px ${(props) => setAlpha(props.color, 0.18)},
  0px 2px 20px -9px ${(props) => setAlpha(props.color, 0.24)}
;

    @media only screen and (max-width: 768px) {
      margin: 25px 5% 0 5%;
      padding: 35px 3% 30px 3%;
    }

    @media only screen and (max-width: 480px) {
      margin: 25px 7px 0 7px;
      padding: 35px 2% 30px 2%;
    }
`;

const Timer = Styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const CardDetails = Styled.div`
    text-align: center;
    margin-bottom: 20px;
`;

const StyledHeader = Styled.h2`
    color: #96a2ac;
    font-weight: 400;
    border-top: 1px solid #96a2ac;
    padding: 15px 0;
    margin: 0;
`;

const EventName = Styled.h3`
    color: #7e8e9a;
    font-size: 1.1rem;
    padding: 0;
    margin: 0;
`;

const Date = Styled.span`
     color: #96a2ac;
     font-size: 0.8rem;
     border-bottom: 1px solid #96a2ac;
     display: block;
     padding: 0 0 15px 0;
`;

const Button = Styled.button`
    color: #96a2ac;
    border: none;
    background: transparent;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      color: #7e8e9a;
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SECOND = 1;
const MINUTE = 1;
const HOUR = 1;
const DAY = 1;
const INTERVAL_SPEED = 650;

const Card = ({ event, deleteEvent }) => {
  const { id, name, date, time, color } = event;

  const [eventTime, setEventTime] = useState(time);
  const [timerOver, setTimerOver] = useState(false);

  useEffect(() => {
    const updateTime = (time) => {
      if (timerOver) {
        return;
      }
      if (
        time.days === 0 &&
        time.hours === 0 &&
        time.minutes === 0 &&
        time.seconds === 0
      ) {
        setTimerOver(true);
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }
      if (time.seconds === 0 && time.minutes !== 0) {
        return {
          ...time,
          seconds: 60,
          minutes: time.minutes - MINUTE,
        };
      } else if (time.seconds === 0 && time.minutes === 0 && time.hours !== 0) {
        return {
          ...time,
          minutes: 60,
          hours: time.hours - HOUR,
        };
      } else if (
        time.seconds === 0 &&
        time.minutes === 0 &&
        time.hours === 0 &&
        time.days !== 0
      ) {
        return {
          ...time,
          hours: 24,
          days: time.days - DAY,
        };
      } else if (time.seconds >= 0) {
        return {
          ...time,
          seconds: time.seconds - SECOND,
        };
      }
    };

    const intervalId = setInterval(() => {
      setEventTime((prevState) => updateTime(prevState));
    }, INTERVAL_SPEED);

    if (timerOver) {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timerOver]);

  const handleOnDelete = (e) => {
    deleteEvent(id);
  };

  return (
    <CardWrapper color={color}>
      <Timer>
        <Counter value={eventTime.days} name="days" color={color} />
        <Counter value={eventTime.hours} name="hours" color={color} />
        <Counter value={eventTime.minutes} name="minutes" color={color} />
        <Counter value={eventTime.seconds} name="seconds" color={color} />
      </Timer>
      <CardDetails>
        <StyledHeader>Countdown to:</StyledHeader>
        <EventName>{name}</EventName>
        <Date>{date}</Date>
      </CardDetails>
      <CardFooter>
        <Button>Edit</Button>
        <Button onClick={handleOnDelete}>Delete</Button>
      </CardFooter>
    </CardWrapper>
  );
};

export default Card;
