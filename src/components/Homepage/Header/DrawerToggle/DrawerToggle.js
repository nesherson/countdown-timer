import Styled from 'styled-components';

const Toggle = Styled.div`
  width: 40px;
  height: 45px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
      display: none;
    }
`;

const Div = Styled.div`
  width: 90%;
  height: 3px;
  background: rgb(12,28,63);
  background: linear-gradient(90deg, rgba(12,28,63,1) 10%, rgba(16,38,76,1) 39%, rgba(22,54,96,0.9808123933167017) 98%);
`;

const DrawerToggle = ({ click }) => {
  return (
    <Toggle onClick={click}>
      <Div></Div>
      <Div></Div>
      <Div></Div>
    </Toggle>
  );
};

export default DrawerToggle;
