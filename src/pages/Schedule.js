import React from 'react';
import styled from 'styled-components';

const ScheduleContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
`;

const ScheduleHeader = styled.div`
  background-color: #f9f9f9;
  padding: 80px 0;
  text-align: center;
`;

const ScheduleTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const Schedule = () => {
  return (
    <ScheduleContainer>
      <ScheduleHeader>
        <ScheduleTitle>Wedding Schedule</ScheduleTitle>
        <p>Coming soon...</p>
      </ScheduleHeader>
    </ScheduleContainer>
  );
};

export default Schedule; 