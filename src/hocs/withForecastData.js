import React from "react";

const withForecastData = (Component) => (props) => {
  const data = {
    date: props.data.applicable_date,
    weather: props.data.weather_state_name,
    max_temp: Math.round(props.data.max_temp),
    min_temp: Math.round(props.data.min_temp),
  };
  return <Component {...props} data={data} />;
};

export default withForecastData;

