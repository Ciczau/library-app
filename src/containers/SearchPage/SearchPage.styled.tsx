import styled from "styled-components";

export const Wrapper = styled.div`
  width: calc(100vw - 80px);
  margin-left: 80px;

  display: flex;
  flex-direction: column;

  padding: 40px;
  align-items: center;
`;

export const Input = styled.input`
  font-family: inherit;
  font-size: 16px;
  padding: 8px 16px;
  outline: none;
  border: 0;
  box-shadow: 0px 0px 5px 3px #00000040;
  width: 500px;
`;
export const BooksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  justify-content: center;
  gap: 30px;
`;
