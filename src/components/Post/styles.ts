import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  position: relative;

  img {
    width: 100%;
    max-height: 600px;
    object-fit: cover;
  }
`;

export const ImageContainer = styled.div`
  ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: calc(100% - 4px);
      background-color: black;
      z-index: 90;
      opacity: .6;
    }
`;

export const HeaderInfo = styled.div`
  position: absolute;
  z-index: 95;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  bottom: 25px;
  left: 0;
  right: 0;
  padding: 1rem;

  > p {
    color: ${({theme}) => theme.lightGray};
    font-size: 14px;
    letter-spacing: 1px;
    margin-bottom: 1rem;

    :first-of-type {
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  > h2 {
    margin-top: 1rem;
    font-size: 1.25rem;
  }
`;

export const BodyContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    padding: 1rem;
    margin: 0 auto;
`;

