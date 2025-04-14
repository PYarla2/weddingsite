import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroContainer = styled.div`
  height: 100vh;
  background-color: #d4b098;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 0 20px;
`;

const HeroTitle = styled.h1`
  font-size: 72px;
  margin-bottom: 20px;
  font-weight: 400;
`;

const HeroSubtitle = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
  font-weight: 300;
`;

const HeroDate = styled.h3`
  font-size: 24px;
  margin-bottom: 40px;
  font-weight: 300;
`;

const HeroLocation = styled.h3`
  font-size: 24px;
  margin-bottom: 50px;
  font-weight: 300;
`;

const HeroButton = styled(Link)`
  display: inline-block;
  padding: 15px 40px;
  background-color: #d4b098;
  color: white;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #c09c84;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>John Street & Jane Doe</HeroTitle>
        <HeroSubtitle>are getting married</HeroSubtitle>
        <HeroDate>June 15, 2025</HeroDate>
        <HeroLocation>Cancun, Mexico</HeroLocation>
        <HeroButton to="/rsvp">RSVP</HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero; 