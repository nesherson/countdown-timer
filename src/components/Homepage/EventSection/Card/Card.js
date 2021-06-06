import Styled from 'styled-components';

import Counter from '../../../../UI/Counter/Counter';

const CardWrapper = Styled.div`
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

const Card = (props) => {
  return (
    <CardWrapper>
      <Timer>
        <Counter value='3' name='days' />
        <Counter value='22' name='hours' />
        <Counter value='45' name='minutes' />
        <Counter value='33' name='seconds' />
      </Timer>
    </CardWrapper>
  );
};

export default Card;
