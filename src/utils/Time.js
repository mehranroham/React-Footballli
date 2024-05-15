export const timeConvert = (time) => {
  let today = new Date(`${time}`);

  const hours = today.getHours();
  let minutes = today.getMinutes();
  if (minutes === 0) minutes = '00';

  return `${hours}:${minutes}`;
};
