export const getweather = async (city, setweather) => {
  const API_KEY = "81bbcf61177344a69c686cd64f1ce7a0";
  const URL = "";

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
