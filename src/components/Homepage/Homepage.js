import Styled from 'styled-components';

import EventSection from './EventSection/EventSection';

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
  return (
    <Main>
      <Header>
        <StyledH1>Events</StyledH1>
      </Header>
      <EventSection />
    </Main>
  );
};

export default Homepage;
