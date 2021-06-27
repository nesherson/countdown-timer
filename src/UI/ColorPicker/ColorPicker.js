import { useState } from 'react';
import Styled, { css } from 'styled-components';

import { setAlpha } from '../../util/helpers';

const Container = Styled.div`
    margin: 25px 0 20px 0;
    display: flex;
    flex-flow: row;
    align-items: center;
`;

const Colors = Styled.div`
    display: flex;
    flex-flow: row;
`;

const Color = Styled.div`
    margin: 2px 4px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    ${(props) =>
      props.selected
        ? css`
            outline: 4px solid ${(props) => setAlpha(props.color, 0.7)};
            outline-offset: 1px;
          `
        : ''}
`;

const Label = Styled.label`
    color: #4f5a64;
    font-weight: 600;
    margin: 0 10px 0 0 ;
    padding: 0;
    font-size: 0.9rem;
`;

const ColorPicker = ({ handleColor }) => {
  const [colors, setColors] = useState([
    { value: 'rgba(249, 55, 28, 1)', selected: true },
    { value: 'rgba(249, 124, 28, 1)', selected: false },
    { value: 'rgba(249, 200, 28, 1)', selected: false },
    { value: 'rgba(65, 208, 182, 1)', selected: false },
    { value: 'rgba(44, 173, 246, 1)', selected: false },
    { value: 'rgba(101, 98, 252, 1)', selected: false },
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

  setAlpha('rgba(249, 55, 28, 1)', 0.3);
  return (
    <Container>
      <Label>Color</Label>
      <Colors>
        {colors.map((color, i) => {
          return (
            <Color
              selected={color.selected}
              key={color.value}
              color={color.value}
              onClick={() => {
                handleSelectedColor(i);
              }}
            />
          );
        })}
      </Colors>
    </Container>
  );
};

export default ColorPicker;
