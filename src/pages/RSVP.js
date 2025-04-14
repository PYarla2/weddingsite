import React from 'react';
import styled from 'styled-components';

const RSVPContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
`;

const RSVPHeader = styled.div`
  background-color: #f9f9f9;
  padding: 80px 0;
  text-align: center;
`;

const RSVPTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const RSVP = () => {
  return (
    <RSVPContainer>
      <RSVPHeader>
        <RSVPTitle>RSVP</RSVPTitle>
        <p>Coming soon...</p>
      </RSVPHeader>
    </RSVPContainer>
  );
};

export default RSVP; 