import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 768px;
  background: linear-gradient(45deg, rgba(44,44,46,1) 0%, rgba(46,46,46,1) 100%);
  border-radius: .5rem;

  > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > svg {
    cursor: pointer;
    transition: all .3s ease;

    :hover {
      color: ${({theme}) => theme.blue};
    }
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  outline: none;
  border: none;
  resize: none;
  font-family: inherit;
  font-size: 1rem;
  min-height: 325px;
`;
