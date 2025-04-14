import React from 'react';
import styled from 'styled-components';

const RegistryContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
`;

const RegistryHeader = styled.div`
  background-color: #f9f9f9;
  padding: 80px 0;
  text-align: center;
`;

const RegistryTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const Registry = () => {
  return (
    <RegistryContainer>
      <RegistryHeader>
        <RegistryTitle>Registry</RegistryTitle>
        <p>Coming soon...</p>
      </RegistryHeader>
    </RegistryContainer>
  );
};

export default Registry; 