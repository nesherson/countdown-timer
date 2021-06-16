import { useState } from 'react';
import { Route } from 'wouter';
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

const Homepage = () => {
  const [events, setEvents] = useState([]);

  const handleCreateEvent = (
    eventName,
    eventTime,
    selectedDate,
    selectedColor
  ) => {
    const id = `${Math.random()}${eventName}`;
    const updatedDate = new Date(selectedDate).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const event = {
      id: id,
      name: eventName,
      date: updatedDate,
      time: eventTime,
      color: selectedColor,
    };
    const updatedEvents = [...events, event];
    setEvents(updatedEvents);
  };

  console.log('Events --> ', events);

  return (
    <Main>
      <Route path='/events'>
        <EventSection events={events} />
      </Route>
      <Route path='/add-event'>
        <AddEvent createEvent={handleCreateEvent} />
      </Route>
      <Route path='/options'>
        <StyledH1>Nothing Here!</StyledH1>
      </Route>
    </Main>
  );
};

export default Homepage;
