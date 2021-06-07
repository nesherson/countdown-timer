import { useState } from 'react';
import Styled from 'styled-components';

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

const AddEvent = (props) => {
  const [eventName, setEventName] = useState('');

  const handleOnChange = (e) => {
    setEventName(e.target.value);
  };

  return (
    <CardWrapper>
      <StyledHeader>Create an Event</StyledHeader>
      <input type='text' value={eventName} onChange={handleOnChange} />
    </CardWrapper>
  );
};

export default AddEvent;
