import styled, { css } from 'styled-components';

interface Props {
  major?: boolean;
}

export const ArticleContainer = styled.article<Props>`
  display: flex;
  max-height: 200px;
  margin-block: 1rem;
  gap: 1rem;
  overflow: hidden;

  ${({})}
`;

export const ImageContainer = styled.div`
  max-width: 350px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderInfo = styled.div`
  > p {
    color: ${({theme}) => theme.lightGray};
    font-size: 14px;
    letter-spacing: 1px;
    margin-bottom: .5rem;

    :first-of-type {
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;

export const Title = styled.div`
  margin-block: 1rem;
  justify-items: center;
`;

export const Description = styled.div`
  justify-self: center;
  h2 {
    font-size: 1.1rem;
  }
`;
