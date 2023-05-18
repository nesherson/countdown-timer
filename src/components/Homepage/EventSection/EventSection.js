import { useState } from 'react';

import Styled from 'styled-components';

import Card from './Card/Card';
import DialogModal from '../../../UI/dialog/DialogModal';

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


const EventSection = ({ events, deleteEvent }) => {
const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Events>
        {events.map((event) => {
          return (
            <Card
              event={event}
              deleteEvent={deleteEvent}
            />
          );
        })}
      </Events>
      <button onClick={() => setIsOpen(true)}>Open</button>
      <DialogModal
        title="Dialog"
        isOpen={isOpen}
        onProceed={() => {}}
        onClose={() => setIsOpen(false)}

      >
        <div>test</div>
      </DialogModal>
    </>
  );
};

export default EventSection;
