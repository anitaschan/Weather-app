import React from "react";

const withPanelData = (Component) => (props) => {
  const panelData = {
    temp: props.data.weather[0].the_temp,
    date: props.data.weather[0].applicable_date,
    weather: props.data.weather[0].weather_state_name,
  };
  return <Component panelData={panelData} {...props} />;
};

export default withPanelData;
