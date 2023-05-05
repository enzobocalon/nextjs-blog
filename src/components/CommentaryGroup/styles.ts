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

  > p {
    color: ${({theme}) => theme.darkGray};

    a {
      color: ${({theme}) => theme.blue};
    }
  }

  button {
    width: 100%;
    max-width: 250px;
  }
`;

export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
