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
        <p>Join us for a weekend celebration in beautiful Cancun, Mexico</p>
      </ScheduleHeader>
      
      <div className="container" style={{padding: '50px 20px'}}>
        <h3 style={{textAlign: 'center', marginBottom: '40px'}}>Destination Wedding Events</h3>
        
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <div style={{marginBottom: '40px'}}>
            <h4>Friday, June 13, 2025</h4>
            <p><strong>Welcome Cocktail Reception</strong> - 7:00 PM</p>
            <p>Beach Bar at Hyatt Ziva Cancun</p>
            <p>Join us for drinks and appetizers as we welcome everyone to Mexico!</p>
          </div>
          
          <div style={{marginBottom: '40px'}}>
            <h4>Saturday, June 14, 2025</h4>
            <p><strong>Group Excursion</strong> - 10:00 AM to 3:00 PM</p>
            <p>Tulum Ruins & Cenote Tour</p>
            <p>Optional group activity - details provided in welcome package</p>
          </div>
          
          <div style={{marginBottom: '40px'}}>
            <h4>Sunday, June 15, 2025</h4>
            <p><strong>Wedding Ceremony</strong> - 4:00 PM</p>
            <p>Beachfront at Hyatt Ziva Cancun</p>
            <p><strong>Cocktail Hour</strong> - 5:00 PM</p>
            <p>Terrace Overlooking the Ocean</p>
            <p><strong>Reception Dinner & Dancing</strong> - 6:30 PM</p>
            <p>Grand Ballroom at Hyatt Ziva Cancun</p>
          </div>
          
          <div>
            <h4>Monday, June 16, 2025</h4>
            <p><strong>Farewell Brunch</strong> - 10:00 AM to 12:00 PM</p>
            <p>Poolside Restaurant at Hyatt Ziva Cancun</p>
          </div>
        </div>
      </div>
    </ScheduleContainer>
  );
};

export default Schedule; 