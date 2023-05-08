import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  background-color: ${({theme}) => theme.darkGray};
  position: absolute;
  right: 20px;
  top: 40px;
  padding: .5rem;
  border-radius: .4rem;
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  gap: .25rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;

  > * {
    transition: color .3s ease;
  }

  :hover {
    > * {
      color: #dc3545;
    }
  }
`;

export const ModalBackground = styled.div`
  background-color: ${({theme}) => theme.gray};
  padding: 1rem;
  border-radius: .5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;

    > * {
      flex: 1;
    }

    > p {
      text-align: center;
      cursor: pointer;
      transition: all .3s ease;
      :hover {
        color: ${({theme}) => theme.blue};
      }
    }
  }
`;
