import styled from 'styled-components';

export const Container = styled.div`
  border-top: 2px solid ${({theme}) => theme.darkGray};
  padding-top: 1rem;
  margin-top: 2rem;

  .load {
    text-align: center;
    transition: color .3s ease;
    cursor: pointer;

    :hover {
      color: ${({theme}) => theme.blue};
    }
  }
`;

export const GroupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 100%;
    max-width: 250px;
  }
`;
