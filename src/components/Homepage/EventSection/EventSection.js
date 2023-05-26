import Styled from "styled-components";

import Card from "./card/Card";

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
      justify-content: center;
    }
`;

function EventSection({ events, deleteEvent, editEvent }) {
  return (
    <>
      <Events>
        {events.map((event, index) => {
          return <Card 
            key={`${index}-${event.id}`}
            event={event} 
            deleteEvent={deleteEvent} 
            editEvent={editEvent} />;
        })}
      </Events>
    </>
  );
};

export default EventSection;
