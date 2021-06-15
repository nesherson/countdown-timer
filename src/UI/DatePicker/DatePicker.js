import Styled from 'styled-components';

const Wrapper = Styled.div`
  width: 100%;
`;

const StyledInput = Styled.input`
  width: 100%;
  padding: 8px 8px;
  font-size: 1rem;
`;

const DatePicker = ({ date, handleSelectedDate }) => {
  const handleSetDate = (e) => {
    handleSelectedDate(e.target.value);
  };

  return (
    <Wrapper>
      <StyledInput type='date' value={date} onChange={handleSetDate} />
    </Wrapper>
  );
};

export default DatePicker;
