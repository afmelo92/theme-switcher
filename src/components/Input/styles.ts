import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${props => props.theme.color.background};
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid ${props => props.theme.color.secondary};
  color:  ${props => props.theme.color.text};

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #00cc00;
      border-color: #00cc00;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #00cc00;
    `}



  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${props => props.theme.color.text};

    &::placeholder {
      color: ${props => props.theme.color.text};
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
