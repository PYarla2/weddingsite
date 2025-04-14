import React, { useState } from 'react';
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

const PlannerForm = styled.div`
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const FormRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormGroup = styled.div`
  flex: 1;
`;

const Label = styled.label`
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  margin-bottom: 8px;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background-color: white;
`;

const Button = styled.button`
  padding: 14px 30px;
  background-color: #d4b098;
  color: white;
  border: none;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #c09c84;
  }
`;

const ResultsContainer = styled.div`
  margin-top: 40px;
`;

const ResultCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

const ResultTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const ResultDetails = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ResultInfo = styled.div`
  flex: 1;
`;

const ResultPrice = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #d4b098;
`;

const TravelPlanner = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [formData, setFormData] = useState({
    origin: '',
    destination: 'Cancun, Mexico',
    departDate: '',
    returnDate: '',
    travelers: '1'
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock search results
    const mockResults = [
      {
        id: 1,
        airline: 'United Airlines',
        departTime: '8:30 AM',
        arriveTime: '12:45 PM',
        duration: '4h 15m',
        stops: 'Nonstop',
        price: 549
      },
      {
        id: 2,
        airline: 'Delta Airlines',
        departTime: '10:15 AM',
        arriveTime: '2:30 PM',
        duration: '4h 15m',
        stops: 'Nonstop',
        price: 529
      },
      {
        id: 3,
        airline: 'American Airlines',
        departTime: '2:45 PM',
        arriveTime: '7:00 PM',
        duration: '4h 15m',
        stops: '1 stop (MIA)',
        price: 489
      }
    ];
    
    setSearchResults(mockResults);
  };
  
  return (
    <PlannerContainer>
      <PlannerTitle>Travel Planner</PlannerTitle>
      <PlannerForm>
        <form onSubmit={handleSubmit}>
          <FormRow>
            <FormGroup>
              <Label>From</Label>
              <Input 
                type="text" 
                name="origin" 
                value={formData.origin} 
                onChange={handleChange} 
                placeholder="City or airport"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>To</Label>
              <Input 
                type="text" 
                name="destination" 
                value={formData.destination} 
                onChange={handleChange} 
                placeholder="City or airport"
                disabled
              />
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label>Depart</Label>
              <Input 
                type="date" 
                name="departDate" 
                value={formData.departDate} 
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Return</Label>
              <Input 
                type="date" 
                name="returnDate" 
                value={formData.returnDate} 
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Travelers</Label>
              <Select 
                name="travelers" 
                value={formData.travelers} 
                onChange={handleChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5+</option>
              </Select>
            </FormGroup>
          </FormRow>
          <Button type="submit">Search Flights</Button>
        </form>
      </PlannerForm>
      
      {searchResults.length > 0 && (
        <ResultsContainer>
          <h3>Flight Options</h3>
          {searchResults.map(result => (
            <ResultCard key={result.id}>
              <ResultTitle>{result.airline}</ResultTitle>
              <ResultDetails>
                <ResultInfo>
                  <p><strong>Depart:</strong> {result.departTime}</p>
                  <p><strong>Arrive:</strong> {result.arriveTime}</p>
                  <p><strong>Duration:</strong> {result.duration}</p>
                  <p><strong>Stops:</strong> {result.stops}</p>
                </ResultInfo>
                <ResultPrice>${result.price}</ResultPrice>
              </ResultDetails>
            </ResultCard>
          ))}
        </ResultsContainer>
      )}
    </PlannerContainer>
  );
};

export default TravelPlanner; 