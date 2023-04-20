import styled from 'styled-components';
import { Button } from '../Button';

export const Container = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 1rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 83px - 2rem);
`;

export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(45deg, rgba(44,44,46,1) 0%, rgba(46,46,46,1) 100%);
  padding-block: 2rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  ${Button} {
    margin-top: 1rem;
  }

  > a {
    cursor: pointer;
    margin-top: 1rem;

    p {
      transition: all .3s ease;
    }

    :hover {
      p {
        color: ${({theme}) => theme.blue};
      }
    }
  }
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 75%;
  margin: 0 auto;

  label {
    margin-block: .5rem;
  }

  :last-of-type {
    padding-bottom: 1rem;
    border-bottom: 2px solid ${({theme}) => theme.darkGray};
  }
`;

export const Error = styled.p`
  margin-top: .5rem;
  color: #FF3333;
`;
