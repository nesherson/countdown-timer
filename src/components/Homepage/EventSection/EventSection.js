import Styled from 'styled-components';

import Card from './Card/Card';

const Events = Styled.main`
    padding: 25px 45px;
    display: flex;
`;

const EventSection = () => {
  return (
    <Events>
      <Card title='Card 1' />
      <Card title='Card 2' />
    </Events>
  );
};

export default EventSection;
