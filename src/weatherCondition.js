const API_KEY = 'e2ee4cd96b1e1917845b1c31f31f7974';
const Icon_URL = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`
const weatherData = async (city, units = 'metric') => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units} `
  const data = await fetch(URL).then((res) => res.json()).then((data) => data);
  const {
    weather,
    main: { temp, temp_min, temp_max,
      pressure, humidity, feels_like },
    wind: { speed },
    sys: { country },
    name,
  } = data;
  const { description, icon } = weather[0];
  return {
    description,
    icon_URL: Icon_URL(icon),
    temp, temp_min, temp_max, pressure, humidity, feels_like, speed, country, name
  };
};
// https://openweathermap.org/img/wn/02d@2x.png
export { weatherData };