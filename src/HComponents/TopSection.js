import React from "react";
import { Element, scroller } from "react-scroll";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import BackgroundImg from "../assets/company_team.jpg";
import { Button } from "./Button";
import { DownArrow } from "./DownArrow";
import { Logo } from "./Logo";
import { Marginer } from "./Marginer";
// import { Navbar } from "./Navbar";


const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background-image: url(${BackgroundImg});
  position: relative;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(55, 55, 55, 0.89);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MotivationalText = styled.h1`
  font-size: 34px;
  font-weight: 500;
  line-height: 1.4;
  color: #fff;
  margin: 0;
  text-align: center;
`;

const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
`;

export function TopSection(props) {
  const scrollToNextSection = () => {
    scroller.scrollTo("servicesSection", { smooth: true, duration: 1500 });
  };

  const history = useHistory();
  const handleRoute = () =>{ 
    window.location.href="http://localhost:3000/login";
  }

  return (
    <Element name="topSection">
      <TopContainer>
        <BackgroundFilter>
          {/* <Navbar /> */}
          <Marginer direction="vertical" margin="8em" />
          <Logo />
          <Marginer direction="vertical" margin="4em" />
          <MotivationalText>Manage Your Project</MotivationalText>
          <MotivationalText>With your team.</MotivationalText>
          <Marginer direction="vertical" margin="2em" />

          <Button onClick={handleRoute}>Start your Work</Button>

          <DownArrowContainer onClick={scrollToNextSection}>
            <DownArrow />
          </DownArrowContainer>
        </BackgroundFilter>
      </TopContainer>
    </Element>
  );
}