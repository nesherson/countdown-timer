import { useState } from 'react';
import Styled from 'styled-components';

import EventSection from './EventSection/EventSection';
import AddEvent from './AddEvent/AddEvent';

const Main = Styled.main`
    margin-left: 20%;
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

const Homepage = () => {
  const [events, setEvents] = useState([]);

  const handleCreateEvent = (eventName) => {
    const id = `${Math.random()}${eventName}`;
    const event = {
      id: id,
      name: eventName,
    };
    const updatedEvents = [...events, event];
    setEvents(updatedEvents);
  };

  console.log('Homepage/events --> ', events);

  return (
    <Main>
      <Header>
        <StyledH1>Events</StyledH1>
      </Header>
      <AddEvent createEvent={handleCreateEvent} />
      <EventSection events={events} />
    </Main>
  );
};

export default Homepage;
