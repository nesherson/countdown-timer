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

const Card = (props) => {
  return (
    <CardWrapper>
      <Timer>
        <Counter value='3' name='days' />
        <Counter value='22' name='hours' />
        <Counter value='45' name='minutes' />
        <Counter value='33' name='seconds' />
      </Timer>
      <CardDetails>
        <StyledHeader>Countdown to:</StyledHeader>
        <EventName>My birthday</EventName>
        <Date>27.02.2022</Date>
      </CardDetails>
      <StyledSpan>Options</StyledSpan>
    </CardWrapper>
  );
};

export default Card;
