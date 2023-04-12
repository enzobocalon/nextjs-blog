import styled, { css } from 'styled-components';

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

`;

export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-inline: 1rem;
  padding: 1rem;
`;

export const NavItems = styled.div<INav>`
  cursor: pointer;

  ${({disabled, theme}) => disabled && css`
    color: ${theme.lightGray};
    cursor: not-allowed;
  `};
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
