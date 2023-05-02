import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(45deg, rgba(44,44,46,1) 0%, rgba(46,46,46,1) 100%);
  padding: 1rem;
  margin-top: 1.5rem;
  border-radius: 0.5rem;

  > * {
    margin-block: .5rem;

  }

  > p {
    color: ${({theme}) => theme.lightGray};
    letter-spacing: .035em;
  }
`;

export const Author = styled.div`
  letter-spacing: .035em;
`;

export const CommentBody = styled.div`

`;
