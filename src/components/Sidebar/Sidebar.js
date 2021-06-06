import Styled from 'styled-components';

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

const Logo = Styled.div`
    background-color:#596ed9;
    color: #f4f4f4;
    padding: 15px 20px;
    
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
      <Logo>
        <h2>LOGO</h2>
      </Logo>
      <Navigation>
        <NavigationList>
          <ListItem>Home</ListItem>
          <ListItem>Add Event</ListItem>
          <ListItem>Options</ListItem>
        </NavigationList>
      </Navigation>
    </Aside>
  );
};

export default Sidebar;
