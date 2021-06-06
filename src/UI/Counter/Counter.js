import Styled from 'styled-components';

const CounterWrapper = Styled.div`
  width: 50px;
  height: auto;
  
`;

const CounterNumber = Styled.div`
    padding: 10px;
    background-color: #596ed9;
    color: #fff;
    font-size: 1.40rem;
    text-align: center;
    border-radius: 3px;
`;

const Text = Styled.p`
  font-size: 0.8rem;
  margin: 0;
  padding: 0;
  text-align: center;
  color: #96a2ac;
`;

const Counter = (props) => {
  return (
    <CounterWrapper>
      <CounterNumber>{props.value}</CounterNumber>
      <Text>{props.name}</Text>
    </CounterWrapper>
  );
};

export default Counter;
