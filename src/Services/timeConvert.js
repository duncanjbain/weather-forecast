export const utcToHHMM = (time) => {
  const utcTime = new Date(time * 1e3);
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };
  return new Intl.DateTimeFormat('en', options).format(utcTime);
};

export const utcToWeekDayShort = (time) => {
  const utcTime = new Date(time*1e3);
  return new Intl.DateTimeFormat('en', {weekday: 'short'}).format(utcTime)
}