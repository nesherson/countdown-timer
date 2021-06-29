import Styled from 'styled-components';

import Card from './Card/Card';

const Events = Styled.div`
    padding: 15px 3%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media only screen and (max-width: 768px) {
      padding: 15px 10%;
    }

    @media only screen and (max-width: 480px) {
      padding: 15px 0;
    }
    
`;

const EventSection = ({ events }) => {
  return (
    <>
      <Events>
        {events.map((event) => {
          return (
            <Card
              key={event.id}
              eventName={event.name}
              eventDate={event.date}
              eventTime={event.time}
              color={event.color}
            />
          );
        })}
      </Events>
    </>
  );
};

export default EventSection;
