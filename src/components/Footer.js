import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f9f9f9;
  padding: 40px 0;
  text-align: center;
  border-top: 1px solid #eee;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: #777;
  margin-bottom: 20px;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const FooterLink = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: #555;
  text-decoration: none;
  
  &:hover {
    color: #d4b098;
  }
`;

const Copyright = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  color: #999;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>For all the days along the way</FooterText>
        <FooterLinks>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">FAQ</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
          <FooterLink href="mailto:johnandjane@wedding.com">johnandjane@wedding.com</FooterLink>
        </FooterLinks>
        <Copyright>© 2024 John & Jane Wedding. All rights reserved.</Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 