export const setAlpha = (color, alphaValue) => {
  let tempColor = color.split(' ');
  tempColor[3] = `${alphaValue})`;
  return tempColor.join(' ');
};

export const trimString = (str) => {
  return str.split('-').join(' ').slice(1);
};
