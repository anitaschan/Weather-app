const useForecastData = (data) => {
  return {
    date: data.applicable_date,
    weather: data.weather_state_name,
    max_temp: Math.round(data.max_temp),
    min_temp: Math.round(data.min_temp),
  };
};

export default useForecastData;
 