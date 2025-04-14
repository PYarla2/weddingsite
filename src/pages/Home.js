import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div``;

const AboutSection = styled.section`
  padding: 100px 0;
  background-color: #f9f9f9;
`;

const AboutContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 42px;
  margin-bottom: 30px;
`;

const AboutText = styled.p`
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 30px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const CountdownSection = styled.section`
  padding: 80px 0;
  background-color: #8a9ea7;
  color: white;
  text-align: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const CountdownContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

const CountdownTitle = styled.h2`
  font-size: 42px;
  margin-bottom: 40px;
`;

const CountdownDisplay = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const CountdownItem = styled.div`
  text-align: center;
`;

const CountdownNumber = styled.div`
  font-size: 48px;
  font-weight: 300;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const CountdownLabel = styled.div`
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const RSVPButton = styled(Link)`
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

const Home = () => {
  // Calculate days until wedding (June 15, 2025)
  const calculateTimeLeft = () => {
    const weddingDate = new Date('June 15, 2025').getTime();
    const now = new Date().getTime();
    const difference = weddingDate - now;
    
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      return { days, hours, minutes, seconds };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };
  
  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearTimeout(timer);
  });
  
  return (
    <HomeContainer>
      <Hero />
      
      <AboutSection>
        <AboutContent>
          <AboutTitle>Our Story</AboutTitle>
          <AboutText>
            John Street and Jane Doe first met in the fall of 2018 at a mutual friend's housewarming party in Brooklyn. 
            What started as a casual conversation about their shared love for hiking and photography quickly 
            blossomed into something more. After three years of adventures together - from road trips along 
            the California coast to backpacking through Europe - John proposed on a snowy evening in Central Park.
          </AboutText>
          <AboutText>
            We are so excited to celebrate our love with our closest friends and family. 
            Join us for a weekend of celebration in beautiful Cancun, Mexico! We've chosen this tropical paradise 
            for our destination wedding and can't wait to share this special experience with you.
          </AboutText>
        </AboutContent>
      </AboutSection>
      
      <CountdownSection>
        <CountdownContent>
          <CountdownTitle>Countdown to Our Big Day</CountdownTitle>
          <CountdownDisplay>
            <CountdownItem>
              <CountdownNumber>{timeLeft.days}</CountdownNumber>
              <CountdownLabel>Days</CountdownLabel>
            </CountdownItem>
            <CountdownItem>
              <CountdownNumber>{timeLeft.hours}</CountdownNumber>
              <CountdownLabel>Hours</CountdownLabel>
            </CountdownItem>
            <CountdownItem>
              <CountdownNumber>{timeLeft.minutes}</CountdownNumber>
              <CountdownLabel>Minutes</CountdownLabel>
            </CountdownItem>
            <CountdownItem>
              <CountdownNumber>{timeLeft.seconds}</CountdownNumber>
              <CountdownLabel>Seconds</CountdownLabel>
            </CountdownItem>
          </CountdownDisplay>
          <RSVPButton to="/rsvp">RSVP Now</RSVPButton>
        </CountdownContent>
      </CountdownSection>
    </HomeContainer>
  );
};

export default Home; 