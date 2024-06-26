import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Information = styled.p`
  b {
    cursor: pointer;
  }
`;
export const Input = styled.input`
  padding: 15px;
  border: none;
  width: 400px;
  border: 1px solid black;
`;

export const Button = styled.button`
  padding: 15px;
  border: none;
  width: 400px;
  background-color: black;
  color: white;
  cursor: pointer;
`;
