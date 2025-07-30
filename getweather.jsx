export const getweather = async (city, setweather) => {
  const API_KEY = "81bbcf61177344a69c686cd64f1ce7a0";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    if (data.cod === 200) {
      setweather(data);
    } else {
      setweather(null);
      alert("City Not found");
    }
  } catch (err) {
    console.log("Error :", err);
    setweather(null);
  }
};
