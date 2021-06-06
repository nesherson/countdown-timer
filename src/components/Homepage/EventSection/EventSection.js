import Styled from 'styled-components';

import Card from './Card/Card';

const Events = Styled.main`
    padding: 25px 20px;
`;

const EventSection = () => {
  return (
    <Events>
      <Card title='Card 1' />
    </Events>
  );
};

export default EventSection;
