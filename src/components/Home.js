import React, { useEffect, useContext } from "react";
import { getLocationData } from "../api/api";
import { Context } from "../context/store";
import WeatherPanel from "./WeatherPanel/WeatherPanel";
import MainWindow from "./MainWindow";
import styled from "styled-components";

const getData = async (dispatch) => {
  const data = await getLocationData();
  dispatch({ type: "setLocationData", payload: { data } });
};

const StyledContainer = styled.div`
  display: flex;
`;

const Home = (props) => {
  const [state, dispatch] = useContext(Context);
  useEffect(() => {
    getData(dispatch);
  }, [dispatch]);

  return (
    <StyledContainer>
      {state.showSearch ? (
        <div>search panel</div>
      ) : (
        state.data.weather && <WeatherPanel {...state} />
      )}
      <MainWindow />
    </StyledContainer>
  );
};

export default Home;
