import React from 'react';
import styled from 'styled-components';
import TravelPlanner from '../components/TravelPlanner';

const TravelContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
`;

const TravelHeader = styled.div`
  background-color: #f9f9f9;
  padding: 80px 0;
  text-align: center;
`;

const TravelTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const Travel = () => {
  return (
    <TravelContainer>
      <TravelHeader>
        <TravelTitle>Travel Information</TravelTitle>
        <p>Plan your trip to our destination wedding in Cancun</p>
      </TravelHeader>
      <TravelPlanner />
    </TravelContainer>
  );
};

export default Travel; 