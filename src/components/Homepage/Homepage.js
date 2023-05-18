import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Styled from 'styled-components';

import Sidebar from '../Sidebar/Sidebar';
import Header from './Header/Header';
import EventSection from './EventSection/EventSection';
import AddEvent from './AddEvent/AddEvent';
import SideDrawer from './SideDrawer/SideDrawer';

const Container = Styled.div`
  position: relative;
  min-width: 360px;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px auto;
  grid-template-columns: 200px 10% auto 10% 200px;
   @media only screen and (max-width: 768px) {
    grid-template-columns: 15% 10% auto 10% 15%;
    } 
`;

const Headline = Styled.h1`
    margin: 0 0 0 25px;
    padding: 0;
    color: rgb(12,28,63);
`;

const Main = Styled.main`

    grid-row-start: 2;
    grid-row-end: end;

    grid-column-start: 2;
    grid-column-end: 6;

    transition: 2s;
    background-color: #edf2f7;

    @media only screen and (max-width: 768px) {
      grid-column-start: 1;
    }

`;

const Homepage = () => {
  const [events, setEvents] = useState([]);
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const handleToggleSideDrawer = () => {
    setShowSideDrawer((prevState) => !prevState);
  };

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

  const deleteEvent = (eventId) => {
    setEvents(events.filter(e => e.id !== eventId));
  } 

  return (
    <Container>
      <Header toggle={handleToggleSideDrawer} />
      <Sidebar />
      <SideDrawer show={showSideDrawer} toggle={handleToggleSideDrawer} />
      <Main>
        <Switch>
          <Route path='/events'>
            <EventSection events={events} deleteEvent={deleteEvent} />
          </Route>
          <Route path='/add-event'>
            <AddEvent createEvent={handleCreateEvent} />
          </Route>
          <Route path='/options'>
            <Headline>Nothing Here!</Headline>
          </Route>
        </Switch>
      </Main>
    </Container>
  );
};

export default Homepage;
