import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.3s ease;
  background-color: ${props => props.scrolled ? 'white' : 'transparent'};
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  max-width: 1400px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
  color: ${props => props.scrolled ? '#333' : 'white'};
  text-decoration: none;
  font-weight: 500;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
`;

const NavLink = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: ${props => props.scrolled ? '#333' : 'white'};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #d4b098;
  }
  
  &.active {
    border-bottom: 1px solid #d4b098;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <NavContainer scrolled={scrolled}>
      <NavInner>
        <Logo to="/" scrolled={scrolled}>John Street & Jane Doe</Logo>
        <NavLinks>
          <NavLink to="/" scrolled={scrolled} className={location.pathname === '/' ? 'active' : ''}>
            Home
          </NavLink>
          <NavLink to="/schedule" scrolled={scrolled} className={location.pathname === '/schedule' ? 'active' : ''}>
            Schedule
          </NavLink>
          <NavLink to="/travel" scrolled={scrolled} className={location.pathname === '/travel' ? 'active' : ''}>
            Travel
          </NavLink>
          <NavLink to="/registry" scrolled={scrolled} className={location.pathname === '/registry' ? 'active' : ''}>
            Registry
          </NavLink>
          <NavLink to="/gallery" scrolled={scrolled} className={location.pathname === '/gallery' ? 'active' : ''}>
            Gallery
          </NavLink>
          <NavLink to="/rsvp" scrolled={scrolled} className={location.pathname === '/rsvp' ? 'active' : ''}>
            RSVP
          </NavLink>
        </NavLinks>
      </NavInner>
    </NavContainer>
  );
};

export default Navbar; 