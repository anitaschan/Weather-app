import React, { useContext } from "react";
import { Context } from "../../context/store";
import styled from "styled-components";
import moment from "moment";
import { weatherIcons } from "./config.js";
import withPanelData from "../../hocs/withPanelData";

const Container = styled.div`
  min-height: 100vh;
  background-color: #1e213a;
  color: white;
  display: flex;
  flex-direction: column;
`;
const ImgWrapper = styled.div`
  background-image: url("/Cloud-background.png");
  height: 375px;
  /* border: 2px solid cyan; */
  background-repeat: no-repeat;
  background-position: top;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BackgroundCover = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgb(30, 33, 58, 0.9);
  position: absolute;
`;
const StyledImg = styled.img`
  z-index: 10;
`;

const InfoWrapper = styled.div`
  /* border: 2px white solid; */
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  font-family: "Raleway", sans-serif;
`;

const Date = styled.p`
  font-size: 18px;
  color: #a09fb1;
  margin: 0;
`;

const Weather = styled.p`
  font-size: 36px;
  color: #a09fb1;
  margin: 0;
`;

const Temp = styled.p`
  font-size: 144px;
  margin: 0;
`;

const Degree = styled.span`
  font-size: 36px;
  color: #a09fb1;
  margin: 0;
`;

const Button = styled.button`
  background-color: #6e707a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 40px;
  width: 161px;
  font-family: Raleway;
  color: white;
  outline: none;
`;

const Circle = styled.button`
  background-color: #6e707a;
  border: none;
  border-radius: 50%;
  height: 38px;
  width: 40px;
  outline: none;
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;

const WeatherPanel = ({ panelData }) => {
  const [dispatch] = useContext(Context);

  return (
    <Container>
      <SearchWrapper>
        <Button
          onClick={() => {
            dispatch({ type: "toggleSearch", payload: true });
          }}
        >
          Search for places
        </Button>
        <Circle />
      </SearchWrapper>
      {Object.keys(panelData).length === 0 ? (
        <InfoWrapper>Loading...</InfoWrapper>
      ) : (
        <>
          <ImgWrapper>
            <BackgroundCover />
            <StyledImg
              src={weatherIcons[panelData.weather]}
              alt='Sun and rain'
              border='2px solid white'
            />
          </ImgWrapper>
          <InfoWrapper>
            <Temp>
              {Math.round(panelData.temp)}
              <Degree>&deg;C</Degree>
            </Temp>
            <Weather>{panelData.weather}</Weather>
            <Date>{moment(panelData.date).format("ddd D MMM")}</Date>
          </InfoWrapper>
        </>
      )}
    </Container>
  );
};

export default withPanelData(WeatherPanel);
