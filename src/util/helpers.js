export function setAlpha(color, alphaValue) {
  let tempColor = color.split(' ');
  tempColor[3] = `${alphaValue})`;
  return tempColor.join(' ');
};

export function createEventId(eventName = null) {
  return eventName !== null ? `${Math.floor(Math.random() * 10000)}${eventName}` :
    `${Math.floor(Math.random() * 10000)}`
}

