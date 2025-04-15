import React from 'react';
import styled from 'styled-components';

const PlannerContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const PlannerTitle = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
`;

const InfoSection = styled.div`
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const InfoText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const TravelLink = styled.a`
  display: inline-block;
  padding: 14px 30px;
  background-color: #d4b098;
  color: white;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #c09c84;
  }
`;

const Highlight = styled.span`
  font-weight: 500;
  color: #d4b098;
`;

const TravelPlanner = () => {
  return (
    <PlannerContainer>
      <PlannerTitle>Travel Information</PlannerTitle>
      <InfoSection>
        <InfoText>
          We recommend booking your flights to Cancun International Airport (CUN) at least 3-4 months in advance for the best rates.
          Our destination wedding venue is located in the beautiful Hotel Zone of Cancun.
        </InfoText>
        <InfoText>
          For a seamless travel experience, we've exclusively partnered with <Highlight>VoyJournp</Highlight> to handle all your travel arrangements.
          Simply use the link below to book your accommodations and upload your travel itinerary through the VoyJournp platform.
        </InfoText>
        <InfoText>
          Using VoyJournp helps us coordinate arrivals and ensure everyone has the information they need for our special weekend.
        </InfoText>
        <TravelLink href="https://voyjourno.com" target="_blank" rel="noopener noreferrer">
          Book Through VoyJournp
        </TravelLink>
      </InfoSection>
    </PlannerContainer>
  );
};

export default TravelPlanner; 