import Styled from 'styled-components';

import Card from './Card/Card';

const Events = Styled.main`
    padding: 25px 45px;
    display: flex;
`;

const StyledH1 = Styled.h1`
    margin: 0;
    padding: 0;
`;

const Header = Styled.header`
    margin: 0;
    padding: 30px 45px;
    border-bottom: 1px solid #eaedfa;
    box-sizing: border-box;
    height: 104px;
`;

const EventSection = ({ events }) => {
  return (
    <>
      <Header>
        <StyledH1>Events</StyledH1>
      </Header>
      <Events>
        {events.map((event) => {
          return (
            <Card
              key={event.id}
              eventName={event.name}
              eventDate={event.date}
              eventTime={event.time}
            />
          );
        })}
      </Events>
    </>
  );
};

export default EventSection;
