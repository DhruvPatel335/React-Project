import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "./Marginer";
import { OurSerivce } from "./OurService";
import { SectionTitle } from "./SectionTitle";

import Service1Img from "../assets/share_ideas.jpg";
import Service2Img from "../assets/file_sharing.jpg";
import Service3Img from "../assets/schedule_task.jpg";

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0px;
`;

export function ServicesSection(props) {
  return (
    <ServicesContainer name="servicesSection">
      <br/>
      <SectionTitle>Project Manager Software</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <OurSerivce
        title="Fully integrated services"
        description="You can chat within on differnet 
        channels according to your requirement with all 
        your team members."
        imgUrl={Service1Img}
      />
      <OurSerivce
        title="Share Files"
        description=" All the members can share files
        of all format on this platform easily and 
        can download them too."
        imgUrl={Service2Img}
        isReversed
      />
      <OurSerivce
        title="Schedule your task"
        description="You can easily schedule your task 
        along with others and discuss this with others too."
        imgUrl={Service3Img}
      />
    </ServicesContainer>
    
  );
}