import styled from "styled-components";
import {
  FaBookOpen,
  FaBookmark,
  FaSearch,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { SiLibrarything } from "react-icons/si";

export const Wrapper = styled.div`
  width: 80px;
  min-height: 100vh;
  padding: 20px 0px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  box-shadow: 0px 0px 5px 3px #0000002b;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const MainMenu = styled.div`
  display: flex;
  gap: 25px;
  flex-direction: column;
  align-items: center;
`;

export const BookmarkIcon = styled(FaBookmark)`
  svg {
    box-shadow: 0px 0px 5px 3px #00000099;
  }
  height: 30px;
  width: 30px;
  color: black;
  cursor: pointer;
`;

export const Logo = styled(SiLibrarything)`
  width: 50px;
  height: 50px;
  margin-top: 10px;
  cursor: pointer;
  color: black;
`;

export const BookIcon = styled(FaBookOpen)`
  height: 30px;
  width: 30px;
  color: black;
  cursor: pointer;
`;

export const UserIcon = styled(FaUser)`
  height: 30px;
  width: 30px;
  color: black;
  cursor: pointer;
`;
export const LoginIcon = styled(FaSignInAlt)`
  height: 30px;
  width: 30px;
  color: black;
  cursor: pointer;
`;

export const LogoutIcon = styled(FaSignOutAlt)`
  height: 30px;
  width: 30px;
  color: black;
  cursor: pointer;
`;

export const SearchIcon = styled(FaSearch)`
  height: 30px;
  width: 30px;
  color: black;
  cursor: pointer;
`;
