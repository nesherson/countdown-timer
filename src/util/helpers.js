export const setAlpha = (color, alphaValue) => {
  let tempColor = color.split(' ');
  tempColor[3] = `${alphaValue})`;
  return tempColor.join(' ');
};
