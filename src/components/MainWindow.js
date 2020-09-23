import React, { useContext } from "react";
import { Context } from "../context/store";
import SmallWidget from "./SmallWidget/SmallWidget";

const MainWindow = () => {
  const [state] = useContext(Context);
  return (
    <div>
      {state.data.weather &&
        state.data.weather.map((day) => (
          <SmallWidget data={day} key={day.id} />
        ))}
    </div>
  );
};

export default MainWindow;

