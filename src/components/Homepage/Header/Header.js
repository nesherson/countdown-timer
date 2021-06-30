import Styled from 'styled-components';

import DrawerToggle from './DrawerToggle/DrawerToggle';

const Headline = Styled.h1`
    margin: 0 0 0 25px;
    padding: 0;
    color: rgb(12,28,63);
`;

const Container = Styled.header`
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 6;
    display: flex;
    align-items: center;
    padding: 0;
    border-bottom: 1px solid rgba(220, 230, 239, 0.7);
    box-sizing: border-box;
    background-color: #edf2f7;
    z-index: 100;
    box-shadow:
  0 4.3px 6.3px rgba(0, 0, 0, 0.017),
  0 10.9px 13px rgba(0, 0, 0, 0.025),
  0 25.6px 22.9px rgba(0, 0, 0, 0.033),
  0 73px 62px rgba(0, 0, 0, 0.05)
;

@media only screen and (max-width: 768px) {
      grid-column-start: 1;
    }

`;

const Wrapper = Styled.div`
    display: flex;
    align-items: center;
    
    @media only screen and (max-width: 768px) {
      margin: 0 auto;
      width: 420px;
    }

    @media only screen and (max-width: 440px) {
      width: 100%;
      margin: 0 7px;
    } 
`;

const Header = ({ toggle }) => {
  return (
    <Container>
      <Wrapper>
        <DrawerToggle click={toggle} />
        <Headline>Add Event</Headline>
      </Wrapper>
    </Container>
  );
};

export default Header;
