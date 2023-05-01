import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 85px);
  span {
    color: ${({theme}) => theme.blue};
  }

  a {
    margin-top: 1rem;
    font-size: 1.2rem;
    transition: all .3s ease;

    :hover {
      color: ${({theme}) => theme.blue};
    }
  }
`;
