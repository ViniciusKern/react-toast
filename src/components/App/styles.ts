import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  main {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    justify-content: center;
  }

  input {
    width: 100%;
    outline: none;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    height: 48px;
    border-radius: 4px;
    padding: 0 8px;
    font-size: 22px;
    border: 2px solid rgb(219, 226, 235);
  }

  button {
    width: 100%;
    height: 52px;
    padding: 0 16px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    border-radius: 4px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    transition: background 0.1s ease-in;
    cursor: pointer;
  }

  .duration-input {
    width: 100px;
    margin-left: 8px;
  }

  .btn {
    background: #1680d0;

    &:hover {
      background: #2f9ae9;
    }
  }

  .btn-success {
    background: #28a745;

    &:hover {
      background: #56cc72;
    }
  }

  .btn-error {
    background: #dc3545;

    &:hover {
      background: #ed6c79;
    }
  }
`;
