import Styled from 'styled-components';
import { Link } from 'wouter';

const Aside = Styled.aside`
    box-sizing: border-box;
    width: 20%;
    min-width: 220px;
    background-color: #2e48cd;
    color: #f4f4f4;
    position: fixed;
    height: 100%;
    transition: background-color 0.2s ease;
    @media (max-width: 768px) {
        display: none;
    }
`;

const LogoWrapper = Styled.div`
    background-color:#596ed9;
    color: #f4f4f4;
    height: 104px;
    box-sizing: border-box;
`;

const StyledHeader = Styled.h2`
    margin: 0;
    padding: 30px 45px;
    
`;

const NavigationList = Styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const Navigation = Styled.nav`
    padding: 25px 20px;
`;

const ListItem = Styled.li`
    padding: 10px 7px;
    font-size: 1.15rem;
    border-radius: 5px;
    &:hover {
        background-color: #1a2b81;
    }
`;

const Sidebar = () => {
  return (
    <Aside>
      <LogoWrapper>
        <StyledHeader>LOGO</StyledHeader>
      </LogoWrapper>
      <Navigation>
        <NavigationList>
          <ListItem>
            <Link href='/events'>Home</Link>
          </ListItem>
          <ListItem>
            <Link href='/add-event'>Add Event</Link>
          </ListItem>
          <ListItem>
            <Link href='/options'>Options</Link>
          </ListItem>
        </NavigationList>
      </Navigation>
    </Aside>
  );
};

export default Sidebar;
