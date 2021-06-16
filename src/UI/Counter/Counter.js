import Styled from 'styled-components';

const CounterWrapper = Styled.div`
  width: 50px;
  height: auto;
`;

//#596ed9
const CounterNumber = Styled.div`
    padding: 10px;
    background-color: ${(props) => props.color};
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

const Counter = ({ value, name, color }) => {
  return (
    <CounterWrapper>
      <CounterNumber color={color}>{value}</CounterNumber>
      <Text>{name}</Text>
    </CounterWrapper>
  );
};

export default Counter;
