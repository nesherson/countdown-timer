import { useEffect, useState } from 'react';
import Styled from 'styled-components';

import { setAlpha } from '../../../../util/helpers';

import Counter from '../../../../UI/Counter/Counter';

const CardWrapper = Styled.div`
    margin: 25px 25px 0 0;
    min-width: 300px;
    max-width: 320px;
    height: 300px;
    padding: 35px 25px 30px 25px;
    border-radius: 12px;
    background-color: #fff;
    box-shadow:
  0 2.8px 2.2px ${(props) => setAlpha(props.color, 0.08)},
  0 6.7px 5.3px ${(props) => setAlpha(props.color, 0.0088)},
  0 12.5px 10px ${(props) => setAlpha(props.color, 0.0095)},
  0 22.3px 17.9px ${(props) => setAlpha(props.color, 0.0102)},
  0 41.8px 33.4px ${(props) => setAlpha(props.color, 0.011)},
  0 100px 80px ${(props) => setAlpha(props.color, 0.12)}
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
    border-bottom: 1px solid #96a2ac;
    padding: 15px 0;
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

const StyledSpan = Styled.span`
    color: #96a2ac;
    padding: 15px 0 0 0;
    display: block;
`;

const SECOND = 1;
const MINUTE = 1;
const HOUR = 1;
const DAY = 1;
const INTERVAL_SPEED = 650;

const Card = ({ eventName, eventDate, eventTime, color }) => {
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
    }, INTERVAL_SPEED);

    if (timerOver) {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timerOver]);

  return (
    <CardWrapper color={color}>
      <Timer>
        <Counter value={time.days} name='days' color={color} />
        <Counter value={time.hours} name='hours' color={color} />
        <Counter value={time.minutes} name='minutes' color={color} />
        <Counter value={time.seconds} name='seconds' color={color} />
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
