import Styled from "styled-components";

import Card from "./Card/Card";

const Events = Styled.div`
    padding: 15px 3%;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    @media only screen and (max-width: 768px) {
      padding: 15px 10%;
    }

    @media only screen and (max-width: 480px) {
      padding: 15px 0;
    }
`;

function EventSection({ events, deleteEvent, openEditModal }) {
  return (
    <>
      <Events>
        {events.map((event, index) => {
          return <Card key={`${index}-${event.id}`}event={event} deleteEvent={deleteEvent} openEditModal={openEditModal} />;
        })}
      </Events>
    </>
  );
};

export default EventSection;
