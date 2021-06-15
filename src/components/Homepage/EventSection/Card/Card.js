import { useEffect, useState } from 'react';
import Styled from 'styled-components';

import Counter from '../../../../UI/Counter/Counter';

const CardWrapper = Styled.div`
    margin-right: 25px;
    width: 250px;
    border: 1px solid #96a2ac;
    padding: 30px 25px 20px 25px;
    border-radius: 5px;
    box-shadow: 1px 1px 2px 2px #d9d9d9;
`;

const Timer = Styled.div`
    display: flex;
    justify-content: space-between;
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

const Date = Styled.span`
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

const testTime = {
  days: 1,
  hours: 1,
  minutes: 1,
  seconds: 10,
};

const SECOND = 1;
const MINUTE = 1;
const HOUR = 1;
const DAY = 1;
const intervalSpeed = 650;

const Card = ({ eventName, eventDate, eventTime }) => {
  const [time, setTime] = useState(eventTime);
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
      setTime((prevState) => updateTime(prevState));
    }, intervalSpeed);

    if (timerOver) {
      console.log('clear --> ', time);
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timerOver]);

  console.log('Card/time --> ', time);

  return (
    <CardWrapper>
      <Timer>
        <Counter value={time.days} name='days' />
        <Counter value={time.hours} name='hours' />
        <Counter value={time.minutes} name='minutes' />
        <Counter value={time.seconds} name='seconds' />
      </Timer>
      <CardDetails>
        <StyledHeader>Countdown to:</StyledHeader>
        <EventName>{eventName}</EventName>
        <Date>{eventDate}</Date>
      </CardDetails>
      <StyledSpan>Options</StyledSpan>
    </CardWrapper>
  );
};

export default Card;
