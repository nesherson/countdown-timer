import Styled from 'styled-components';

const Wrapper = Styled.div`
  width: 100%;
`;

const StyledInput = Styled.input`
  width: 100%;
  padding: 8px;
  font-size: 1rem;
  border: 1px solid rgba(184, 192, 199, 0.6);
  border-radius: 4px;
  box-sizing: border-box;
  color: #767688;

  &:focus {
    border: 1px solid rgba(46, 72, 205, 0.6);
    outline: none;
  }
`;

const Label = Styled.label`
  color: #4f5a64;
  font-size: 0.9rem;
  font-weight: 500;
`;

const DatePicker = ({ date, handleSelectedDate }) => {
  const handleSetDate = (e) => {
    handleSelectedDate(e.target.value);
  };

  return (
    <Wrapper>
      <Label>Date</Label>
      <StyledInput type='date' value={date} onChange={handleSetDate} />
    </Wrapper>
  );
};

export default DatePicker;
