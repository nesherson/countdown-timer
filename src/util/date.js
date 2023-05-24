function formatDate(date) {
  return new Date(date);
};

function formatSelectedDate(date) {
  const updatedDate = new Date(date);
  return new Date(
    updatedDate.getFullYear(),
    updatedDate.getMonth(),
    updatedDate.getDate(),
    updatedDate.getHours(),
    updatedDate.getMinutes(),
    updatedDate.getSeconds(),
    0
  );
};

function secondsToDhms(seconds) {
  const tempSeconds = Number(seconds);
  const d = Math.floor(tempSeconds / (3600 * 24));
  const h = Math.floor((tempSeconds % (3600 * 24)) / 3600);
  const m = Math.floor((tempSeconds % 3600) / 60);
  const s = Math.floor(tempSeconds % 60);

  return {
    days: d,
    hours: h,
    minutes: m,
    seconds: s,
  };
}

export function getTimeBetweenDates(dateInitial, dateFinal) {
  if ((formatSelectedDate(dateFinal) - formatDate(dateInitial)) / 1000 < 0)
    return null;

  return secondsToDhms(
    (formatSelectedDate(dateFinal) - formatDate(dateInitial)) / 1000
  );
};

export function getLocaleDateString(date, locales, options) {
  return new Date(date).toLocaleDateString(locales, options);
}

export const defaultDateTimeOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit"
};

export const defaultDateOptions = {
  year: "numeric",
  month: "long",
  day: "numeric"
};
