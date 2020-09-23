import axios from "axios";

export const getLocationData = async () => {
  const res = await axios.get("/api/location/44418/");
  const data = {
    weather: res.data.consolidated_weather,
    location: res.data.title,
  };

  return data;
};

