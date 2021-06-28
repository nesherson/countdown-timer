import { useState } from 'react';
import { Route } from 'wouter';
import Styled from 'styled-components';

import Sidebar from '../Sidebar/Sidebar';
import EventSection from './EventSection/EventSection';
import AddEvent from './AddEvent/AddEvent';
import DrawerToggle from '../Sidebar/DrawerToggle/DrawerToggle';

const Container = Styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 100px 150px auto;
  grid-template-columns: 200px 10% auto 10% 15%;
`;

const StyledH1 = Styled.h1`
    margin: 0;
    padding: 0;
    color: rgb(12,28,63);
   
`;

const Header = Styled.header`
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 6;
    
    
    padding: 30px 0 30px 200px;
    border-bottom: 1px solid #dce6ef;
    //box-sizing: border-box;
    //height: 104px;
    //width: 100%;
    background-color: #edf2f7;

    box-shadow:
  0 4.3px 6.3px rgba(0, 0, 0, 0.017),
  0 10.9px 13px rgba(0, 0, 0, 0.025),
  0 25.6px 22.9px rgba(0, 0, 0, 0.033),
  0 73px 62px rgba(0, 0, 0, 0.05)
;

    /* @media only screen and (max-width: 768px) {
      padding: 30px 0 30px 0;
      display: flex;
      align-items: center;
    } */
 
`;

const Wrapper = Styled.div`
    display: flex;
    align-items: center;
    
    @media only screen and (max-width: 768px) {
      margin: 0 auto;
      width: 75%;
    }

    @media only screen and (max-width: 620px) {
      width: 80%;
    }

    @media only screen and (max-width: 510px) {
      width: 95%;
    }
`;

const Main = Styled.main`

    grid-row-start: 2;
    grid-row-end: end;

    grid-column-start: 2;
    grid-column-end: 6;

    //margin-left: 200px;

    //width: 100%;
    //min-width: 320px;
    background-color: #edf2f7;
    //height: 100%;

    /* @media only screen and (max-width: 1324px) {
      margin-left: 200px;
    } */

    @media (max-width: 768px) {
      margin-left: 0;
      width: 100%;
    }
`;

// const StyledH1 = Styled.h1`
//     margin: 0;
//     padding: 0;
// `;

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
    <Container>
      <Header>
        <Wrapper>
          <DrawerToggle />
          <StyledH1>Add Event</StyledH1>
        </Wrapper>
      </Header>
      <Sidebar />
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
    </Container>
  );
};

export default Homepage;
