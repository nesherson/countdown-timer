import Styled from 'styled-components';

import EventSection from './EventSection/EventSection';

const Main = Styled.main`
    margin-left: 20%;
`;

const Header = Styled.h1`
    margin-top: 0;
    padding: 25px 20px;
`;

const Homepage = () => {
  return (
    <Main>
      <Header>Events</Header>
      <EventSection />
    </Main>
  );
};

export default Homepage;
