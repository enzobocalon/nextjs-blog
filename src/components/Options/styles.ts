import { motion } from 'framer-motion';
import styled from 'styled-components';

interface Props {
  isPost?: boolean;
}

export const Container = styled(motion.div)`
  background-color: ${({theme}) => theme.darkGray};
  position: absolute;
  right: 20px;
  top: 40px;
  padding: .5rem;
  border-radius: .4rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Options = styled.div<Props>`
  display: flex;
  align-items: center;
  gap: .25rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;

  > * {
    transition: color .3s ease;
  }

  :not(:first-of-type) {
    margin-top: .5rem;
  }

  :hover {
    > * {
      color: ${({isPost, theme}) => isPost ? theme.blue : '#dc3545'};
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
