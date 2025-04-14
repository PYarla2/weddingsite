import React from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
`;

const GalleryHeader = styled.div`
  background-color: #f9f9f9;
  padding: 80px 0;
  text-align: center;
`;

const GalleryTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const Gallery = () => {
  return (
    <GalleryContainer>
      <GalleryHeader>
        <GalleryTitle>Photo Gallery</GalleryTitle>
        <p>Coming soon...</p>
      </GalleryHeader>
    </GalleryContainer>
  );
};

export default Gallery; 