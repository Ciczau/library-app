import { FaHeart, FaRegHeart } from "react-icons/fa";
import styled from "styled-components";

export const Wrapper = styled.div<{ type: "multi" | "single" }>`
  width: ${({ type }) => (type === "multi" ? "350px" : "800px")};
  max-width: 90%;
  height: ${({ type }) => (type === "multi" ? "200px" : "700px")};
  box-shadow: 0px 0px 5px 3px #00000040;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
`;

export const Image = styled.img<{ type: "multi" | "single" }>`
  width: ${({ type }) => (type === "multi" ? "130px" : "400px")};
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.div<{ type: "multi" | "single" }>`
  font-size: ${({ type }) => (type === "multi" ? "16px" : "30px")};

  font-weight: bold;
`;

export const Author = styled.div<{ type: "multi" | "single" }>`
  font-size: ${({ type }) => (type === "multi" ? "14px" : "25px")};
`;

export const Content = styled.div<{ type: "multi" | "single" }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: ${({ type }) => (type === "multi" ? "220px" : "400px")};
  padding: 10px 5px;
  justify-content: space-between;

  div {
    padding: 5px;
    width: 100%;
    text-align: left;
  }
`;

export const Button = styled.button<{
  type: "multi" | "single";
  available?: boolean;
}>`
  opacity: ${({ available }) => (available ? "1" : "0.5")};
  font-family: inherit;
  border: 0;
  border-radius: 5px;
  outline: 0;
  box-shadow: 0px 0px 5px 3px #00000026;
  background-color: black;
  color: white;
  font-size: ${({ type }) => (type === "multi" ? "14px" : "20px")};
  padding: 4px 10px;
  cursor: ${({ available }) => (available ? "pointer" : "not-allowed")};
`;

export const Information = styled.p`
  margin: 5px;
  font-weight: bold;
`;

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const HeartIcon = styled(FaRegHeart)`
  height: 30px;
  width: 30px;
  color: black;
  cursor: pointer;
`;
export const FilledHeartIcon = styled(FaHeart)`
  height: 30px;
  width: 30px;
  color: #bd0707;
  cursor: pointer;
`;
