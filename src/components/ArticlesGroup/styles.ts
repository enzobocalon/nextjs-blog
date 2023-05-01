import styled from 'styled-components';
import { Loader } from '../Loader/styles';

export const Container = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 2rem auto;
  padding-inline: 1rem;

  ${Loader} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .pagination {
    width: 100%;
    display: flex;
    list-style: none;
    gap: 1rem;
    justify-content: center;

    li {
      cursor: pointer;
    }
  }

  .selected {
    color: ${({theme}) => theme.blue};
  }

  .pagination-page, .next, .previous {
    :hover {
      color: ${({theme}) => theme.lightGray};
    }
  }

  .error {
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.25rem;
      margin-top: 1rem;
    }
  }

`;
