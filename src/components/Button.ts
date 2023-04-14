import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({theme}) => theme.blue};
  color: white;
  font-weight: bold;
  border: none;
  padding: 1rem 2rem;
  border-radius: .5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all .3s ease;
  width: 100%;

  :hover {
    background-color: white;
    color: ${({theme}) => theme.blue};
  }
`;
