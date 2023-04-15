import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface INav {
  disabled?: boolean;
}

export const Container = styled.header`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  svg {
    display: none;
  }

  @media (max-width: 768px) {
    svg {
      display: block;
    }
  }

`;

export const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    width: fit-content;
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    right: 25px;
    background: linear-gradient(45deg,rgba(44,44,46,1) 0%,rgba(46,46,46,1) 100%);
    top: 60px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 1rem;
    border-radius: 1rem;
    z-index: 100;
  }
`;

export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-inline: 1rem;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const NavItems = styled.div<INav>`
  cursor: pointer;
  position: relative;

  ${({disabled, theme}) => disabled && css`
    color: ${theme.lightGray};
    cursor: not-allowed;
  `};

  ::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1rem;
    width: 100%;
    height: 4px;
    background-color: ${({theme}) => theme.blue};
    transform: scale(0);
    transition: all .3s ease;
    border-radius: 1rem;
  }

  :hover {
    ${({disabled}) => !disabled && css`
      ::after {
        transform: scale(1);
      }
    `};

    @media (max-width: 768px) {
      ::after {
        transform: scale(0);
      }
    }
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding-top: 1rem;
    border-top: 2px solid ${({theme}) => theme.darkGray};
  }

`;
