/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  section {
    background: ${props => props.theme.color.background};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    max-width: 350px;
    height: 100%;
    max-height: 350px;

    div.logo-banner {
      width: 100%;
      display: flex;
      align-items: center;

      img {
        margin: 0 0 0 auto;
        width: 60px;
        height: 60px;
      }

      h1 {
        margin: 0 auto 0 -32px;
        font-size: 40px;
        color: ${props => props.theme.color.text};
      }
    }

    form {
      display: flex;
      flex-direction: column;
      margin-top: 20px;

      & > input {
        margin-top: 10px;
      }

      button {
        margin-top: 10px;
        padding: 15px;
        border-radius: 10px;
        cursor: pointer;
        background: ${props => props.theme.color.primary};
        color: ${props => props.theme.color.text};
        border: none;
        font-weight: bold;
        font-size: 20px;

        transition: opacity 0.2s;

        &:hover,
        &:focus {
          opacity: 0.55;

          background: ${props => props.theme.color.primary};
        }
      }
    }

    a {
      margin: 20px auto 0 auto;
      text-decoration: none;
      color: ${props => props.theme.color.text};

      transition: opacity 0.2s;

      &:hover,
      &:focus {
        opacity: 0.55;
      }
    }
  }
`;
