import Styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import EventIcon from '../../Assets/icons/Event';

const Aside = Styled.aside`
    grid-row-start: 1;
    grid-row-end: end;
    grid-column-start: 1;
    grid-column-end: 2;
    background: rgb(12,28,63);
    background: linear-gradient(90deg, rgba(12,28,63,1) 10%, rgba(16,38,76,1) 39%, rgba(22,54,96,0.9808123933167017) 98%);
    color: #f4f4f4;

    @media only screen and (max-width: 768px) {
      display: none;
    }
`;

const LogoWrapper = Styled.div`
    padding: 35px 0 0 15px;
`;

const LogoIcon = Styled.div`
    display: inline-block;
    padding: 0 10px;
`;

const LogoTextFirst = Styled.h2`
    margin: 0;
    padding: 0;
    color: #fff;
    display: inline-block;
    line-height: 0.3em;
    font-size: 1.55rem;
`;

const LogoTextSecond = Styled.h2`
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 1.65rem;
    line-height: 0.7em;
`;

const NavigationList = Styled.ul`
    list-style: none;
    margin: 25px 0 0 0;
    padding: 0;
`;

const Navigation = Styled.nav`
    padding: 25px 20px;
`;

const ListItem = Styled.li`
    font-size: 1.15rem;
    margin: 15px 0;
`;

const StyledLink = Styled(NavLink)`
  text-decoration: none;
  color: #fff;
  padding: 7px;
    &:hover {
        border-left: 3px solid #4681ea;
    }
    &.active {
    border-left: 3px solid #8cb2f2;
    }
`;

const Sidebar = () => {
  return (
    <Aside>
      <LogoWrapper>
        <LogoIcon>
          <EventIcon width={38} height={36} />
        </LogoIcon>
        <LogoTextFirst>Event</LogoTextFirst>
        <LogoTextSecond>Countdown</LogoTextSecond>
      </LogoWrapper>
      <Navigation>
        <NavigationList>
          <ListItem>
            <StyledLink to='/events'>Events</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to='/add-event'>Add Event</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to='/options'>Options</StyledLink>
          </ListItem>
        </NavigationList>
      </Navigation>
    </Aside>
  );
};

export default Sidebar;
