import Styled from 'styled-components';

const Wrapper = Styled.div`
  width: 100%;
`;

const StyledInput = Styled.input`
  width: 100%;
  padding: 8px 0;
  font-size: 1rem;
  margin: 10px 0;
  border-radius: 5px;
  border: 2px solid #96a2ac;
  &:focus {
    outline: none;
    border-color: #2e48cd;
  }
`;

const Label = Styled.label`
  color: #4f5a64;
  font-size: 0.9rem;
  font-weight: 600;
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
