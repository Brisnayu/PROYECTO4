export const today = new Date(Date.now()).toISOString().slice(0, 10);

export let yesterday;

export const dateMars = () => {
  let todayEarth = new Date();
  let day = todayEarth.getDate() - 2;
  let month = todayEarth.getMonth() + 1;
  let year = todayEarth.getFullYear();

  if (month < 10) {
    if (day < 10) {
      return (yesterday = `${year}-0${month}-0${day}`);
    } else {
      return (yesterday = `${year}-0${month}-${day}`);
    }
  } else {
    if (day < 10) {
      return (yesterday = `${year}-${month}-0${day}`);
    } else {
      return (yesterday = `${year}-${month}-${day}`);
    }
  }
};
