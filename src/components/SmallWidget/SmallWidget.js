import React from "react";
import useForecastData from "../../hooks/useForecastData";

const SmallWidget = ({ data }) => {
  const dataaaaa = useForecastData(data);
  return <div>{dataaaaa.date}</div>;
};

export default SmallWidget;
