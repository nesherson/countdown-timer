import { useState } from "react";
import { createPortal } from "react-dom";
import Styled from "styled-components";

import Header from "./Header/Header";
import EventSection from "./EventSection/EventSection";
import AddEvent from "./AddEvent/AddEvent";
import DialogModal from "../../UI/dialog/DialogModal";

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

const Main = Styled.main`
    grid-row-start: 2;
    grid-row-end: end;

    grid-column-start: 1;
    grid-column-end: 6;

    transition: 2s;
    background-color: #edf2f7;

    @media only screen and (max-width: 768px) {
      grid-column-start: 1;
    }

`;

const Homepage = () => {
  const [events, setEvents] = useState([]);
  const [isEventAddModalOpen, setIsEventAddModalOpen] = useState(false);

  const handleCreateEvent = (
    eventName,
    eventTime,
    selectedDate,
    selectedColor
  ) => {
    const updatedDate = new Date(selectedDate).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const event = {
      id: `${Math.random()}${eventName}`,
      name: eventName,
      date: selectedDate,
      displayDate: updatedDate,
      time: eventTime,
      color: selectedColor,
    };
    const updatedEvents = [...events, event];
    setEvents(updatedEvents);
  };

  const handleEditEvent = (event) => {
    setEvents(events.map(e => {
      if (e.id === event.id) {
        return {
          ...e,
          ...event
        }
      }
      return e;
    }));
  }

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter((e) => e.id !== eventId));
  };

  const handleOpenEventAddModal = () => {
    setIsEventAddModalOpen(true);
  }

  const handleCloseEventAddModal = () => {
    setIsEventAddModalOpen(false);
  }  

  return (
    <Container>
      <Header 
        openAddEventModal={handleOpenEventAddModal}
        />
      <Main>
        <EventSection
          events={events}
          deleteEvent={handleDeleteEvent}
          editEvent={handleEditEvent}
        />
      </Main>
      {createPortal(
        <DialogModal
          isOpen={isEventAddModalOpen}
        >
           <AddEvent 
            closeModal={handleCloseEventAddModal}  
            createEvent={handleCreateEvent} />
        </DialogModal>,
        document.body
      )}
    </Container>
  );
};

export default Homepage;
