import React from "react";
import styled from "styled-components";
import { Footer } from "../HComponents/Footer";
import { Marginer } from "../HComponents/Marginer";
import { MoreAboutSection } from "../HComponents/MoreAboutSection";
import { ServicesSection } from "../HComponents/ServicesSection";
import { TopSection } from "../HComponents/TopSection";
import "../Home.css";
import ContactForm from "../HComponents/ContactForm";
import Team from "../HComponents/Team";
import Login from "../Components/Login";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function Home(props) {
  return (
    <div classname="home_body">
     <Login/>
    <PageContainer>
      <TopSection />
      <ServicesSection />
      <Marginer direction="vertical" margin="2em" />
      <MoreAboutSection />
      <Marginer direction="vertical" margin="8em" />
      
      <Team/>
      
      <ContactForm/>
      <Footer />
    </PageContainer>
    </div>
    

  );
}

export default Home;