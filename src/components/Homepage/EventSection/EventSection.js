import Styled from 'styled-components';

import Card from './Card/Card';

const Events = Styled.main`
    padding: 25px 45px;
    display: flex;
`;

const EventSection = ({ events }) => {
  return (
    <Events>
      {events.map((event) => {
        return <Card key={event.id} eventName={event.name} />;
      })}
    </Events>
  );
};

export default EventSection;
