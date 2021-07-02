import React from 'react'
import "./Team.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Anmol from "../assets/Anmol.png";
import Dhruv from "../assets/Dhruv.png";
import Nikita from "../assets/Nikita.png";

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  color: black;
  font-size: 20px;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  &:not(:last-of-type) {
    margin-right: 11px;
    @media screen and (max-width: 480px) {
      margin-right: 9px;
    }
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
  &:hover {
    color: #adadad;
  }
`;

function Team() {
    return (
        <div>
            <div class="dev" id="developers">
        <h1>Meet Our Team</h1>
        <div class="devs">
          <div class="the-two-devs">
            <div class="dev-1">
              <img src={Anmol} alt="Anmol" />
              <h3>Anmol Singh Shekhawat</h3>
              <p>Developer </p>
              <p> anmolsingh@jklu.edu.in</p>
              <SocialContainer>
              <SocialIcon><a href="mailto:anmolsingh@jklu.edu.in">
                  <FontAwesomeIcon icon={faEnvelope} /></a>
                </SocialIcon>
                <SocialIcon><a href="https://www.linkedin.com/in/anmol-singh-91b972195/">
                  <FontAwesomeIcon icon={faLinkedin} /></a>
                </SocialIcon>
                <SocialIcon><a href="https://www.instagram.com/">
                  <FontAwesomeIcon icon={faInstagram} /></a>
                </SocialIcon>
                <SocialIcon><a href="https://www.facebook.com/">
                  <FontAwesomeIcon icon={faFacebook} /></a>
                </SocialIcon>
              </SocialContainer>
            </div>
            <div class="dev-2">
              <img src={Dhruv} alt="Dhruv" />
              <h3>Dhruv Patel</h3>
              <p>Developer </p>
              <p>dhruvpatel@jklu.edu.in</p>
              <SocialContainer>
              <SocialIcon><a href="mailto:dhruvpatel@jklu.edu.in">
                  <FontAwesomeIcon icon={faEnvelope} /></a>
                </SocialIcon>
                <SocialIcon><a href="https://www.linkedin.com/in/dhruv-patel-8511881a0/">
                  <FontAwesomeIcon icon={faLinkedin} /></a>
                </SocialIcon>
                <SocialIcon><a href="https://www.instagram.com/">
                  <FontAwesomeIcon icon={faInstagram} /></a>
                </SocialIcon>
                <SocialIcon><a href="https://www.facebook.com/">
                  <FontAwesomeIcon icon={faFacebook} /></a>
                </SocialIcon>
              </SocialContainer>
            </div>
            <div class="dev-3">
              <img src={Nikita} alt="Nikita" />
              <h3>Nikita Khoj</h3>
              <p>Developer </p>
              <p>nikitakhoj@jklu.edu.in</p>
              <SocialContainer>
              <SocialIcon><a href="mailto:anmolsingh@jklu.edu.in">
                  <FontAwesomeIcon icon={faEnvelope} /></a>
                </SocialIcon>
                <SocialIcon><a href="https://www.linkedin.com/in/nikita-khoj-336bb11a0/">
                  <FontAwesomeIcon icon={faLinkedin} /></a>
                </SocialIcon>
                <SocialIcon><a href="https://www.instagram.com/">
                  <FontAwesomeIcon icon={faInstagram} /></a>
                </SocialIcon>
                <SocialIcon><a href="https://www.facebook.com/">
                  <FontAwesomeIcon icon={faFacebook} /></a>
                </SocialIcon>
              </SocialContainer>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Team


