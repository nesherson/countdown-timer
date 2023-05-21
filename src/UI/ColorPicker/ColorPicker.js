import { useEffect, useState } from 'react';
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
      props.isSelected
        ? css`
            outline: 2px solid ${(props) => setAlpha(props.color, 0.7)};
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

const ColorPicker = ({ color, setColor }) => {
  const [colors, setColors] = useState([
    { id: 1, value: 'rgba(249, 55, 28, 1)', isSelected: false },
    { id: 2, value: 'rgba(249, 124, 28, 1)', isSelected: false },
    { id: 3, value: 'rgba(249, 200, 28, 1)', isSelected: false },
    { id: 4, value: 'rgba(65, 208, 182, 1)', isSelected: false },
    { id: 5, value: 'rgba(44, 173, 246, 1)', isSelected: false },
    { id: 6, value: 'rgba(101, 98, 252, 1)', isSelected: false },
  ]);

  const handleSelectedColor = (i) => {
    const updatedColors = colors.map((color, index) => {
      if (index === i) {
        return { ...color, isSelected: true };
      } else {
        return { ...color, isSelected: false };
      }
    });
    setColors(updatedColors);
    setColor({
      id: colors[i].id,
      value: colors[i].value
    });
  };

  useEffect(() => {
    if (color) {
      colors.forEach(c => {
        c.isSelected = false;
      })
      const temp = colors.find(c => c.id === color.id);
      temp.isSelected = true;
    }
  }, [color, colors, setColor]);

  return (
    <Container>
      <Label>Color</Label>
      <Colors>
        {colors.map((color, i) => {
          return (
            <Color
              isSelected={color.isSelected}
              key={color.id}
              color={color.value}
              onClick={() => handleSelectedColor(i)}
            />
          );
        })}
      </Colors>
    </Container>
  );
};

export default ColorPicker;
