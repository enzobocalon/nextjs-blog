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
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const Options = styled.div<Props>`
  display: flex;
  align-items: center;
  gap: .25rem;
  cursor: pointer;

  > * {
    transition: color .3s ease;
  }

  :not(:first-of-type) {
    margin-top: .5rem;
  }

  :not(:last-of-type) {
    padding-bottom: .5rem;
    border-bottom: 2px solid #535353;
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
