import styled from "styled-components";

export const Wrapper = styled.div`
  width: calc(100vw - 80px);
  margin-left: 80px;

  display: flex;
  flex-direction: column;

  padding: 40px;
  align-items: center;
`;
export const BooksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  justify-content: center;
  gap: 30px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;
