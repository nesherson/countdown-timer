import { useState } from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`
    margin: 0px 0 15px 0;
    display: flex;
    flex-flow: row;
    align-items: center;
`;

const Colors = Styled.div`
    display: flex;
    flex-flow: row;
`;

const ColorWrapper = Styled.div`
    border-radius: 50%;
    border: 3px solid ${(props) => props.color};
    opacity: ${(props) => (props.selected ? '0.5' : '1.0')};
    visibility: ${(props) => (props.selected ? 'visible' : 'hidden')};
`;

const Color = Styled.div`
    margin: 2px 2px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    visibility: visible;
    opacity: 1.0;
`;

const StyledLabel = Styled.label`
    margin: 0 10px 0 0 ;
    padding: 0;
    font-size: 0.9rem;
`;

const ColorPicker = ({ handleColor }) => {
  const [colors, setColors] = useState([
    { value: '#f9371c', selected: true },
    { value: '#f97c1c', selected: false },
    { value: '#f9c81c', selected: false },
    { value: '#41d0b6', selected: false },
    { value: '#2cadf6', selected: false },
    { value: '#6562fc', selected: false },
  ]);

  const handleSelectedColor = (i) => {
    const updatedColors = colors.map((color, colorIndex) => {
      if (colorIndex === i) {
        return { ...color, selected: true };
      } else {
        return { ...color, selected: false };
      }
    });
    setColors(updatedColors);
    handleColor(colors[i].value);
  };

  return (
    <Wrapper>
      <StyledLabel>Color</StyledLabel>
      <Colors>
        {colors.map((color, i) => {
          return (
            <ColorWrapper
              key={color.value}
              selected={color.selected}
              color={color.value}
            >
              <Color
                color={color.value}
                onClick={() => {
                  handleSelectedColor(i);
                }}
              />
            </ColorWrapper>
          );
        })}
      </Colors>
    </Wrapper>
  );
};

export default ColorPicker;
