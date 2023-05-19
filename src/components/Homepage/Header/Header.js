import Styled from "styled-components";
import { PlusSquare, Calendar } from "react-feather";

const Container = Styled.header`
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 6;
    padding: 0 25px 0 0;
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
    height: 100%;

    @media only screen and (max-width: 768px) {
      margin: 0 auto;
      width: 420px;
    }

    @media only screen and (max-width: 440px) {
      width: 100%;
      margin: 0 7px;
    } 
`;

const LogoWrapper = Styled.div`
    padding: 15px 15px 0 15px;
    background: rgb(12,28,63);
    background: linear-gradient(90deg, rgba(12,28,63,1) 10%, rgba(16,38,76,1) 39%, rgba(22,54,96,0.98) 98%);
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

const HeaderItems = Styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const AddEventButton = Styled.button`
    display: flex;
    justify-content: space-around;
    background: linear-gradient(90deg, rgba(12,28,63,1) 10%, rgba(16,38,76,1) 39%, rgba(22,54,96,0.98) 98%);
    border: 1px solid transparent;
    border-radius: 5px;
    color: #fff;
    font-size: 1.2rem;
    padding: 20px 26px;
    width: 136px;

    &:hover {
    background: linear-gradient(70deg, rgba(12,28,63,1) 10%, rgba(16,38,76,1) 20%, rgba(22,54,96,0.98) 80%);
    }
`;

const Header = ({ openAddEventModal }) => {
  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <LogoIcon>
            <Calendar size={36} color="#fff" />
          </LogoIcon>
          <LogoTextFirst>Event</LogoTextFirst>
          <LogoTextSecond>Countdown</LogoTextSecond>
        </LogoWrapper>
        <HeaderItems>
          <AddEventButton onClick={openAddEventModal}>
          <PlusSquare />
            Add
          </AddEventButton>
        </HeaderItems>
      </Wrapper>
    </Container>
  );
};

export default Header;
