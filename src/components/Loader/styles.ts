import styled, { keyframes, css } from 'styled-components';

interface Props {
  small?: boolean;
}

const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Loader = styled.span<Props>`
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: ${({theme}) => theme.blue};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${rotation} 1s linear infinite;

    ${({small}) => small && css`
      width: 16px;
      height: 16px;
    `}
`;
