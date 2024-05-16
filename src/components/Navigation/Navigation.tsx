import { useNavigate } from "react-router-dom";
import * as S from "./Navigation.styled";
import { useCookies } from "react-cookie";
import { useUserContext } from "../../context/user";

const Navigation = () => {
  const [cookie, setCookie, deleteCookie] = useCookies(["refreshToken"]);
  const navigate = useNavigate();
  const user = useUserContext();
  const logout = () => {
    deleteCookie("refreshToken");
    navigate("/login");
  };
  return (
    <S.Wrapper>
      <S.Logo onClick={() => navigate("/")} />
      <S.MainMenu>
        <S.SearchIcon onClick={() => navigate("/search")} />
        <S.BookIcon onClick={() => navigate("/borrowed")} />
        <S.BookmarkIcon onClick={() => navigate("/bookmarks")} />
      </S.MainMenu>
      <S.MainMenu>
        {!user ? (
          <S.LoginIcon onClick={() => navigate("/login")} />
        ) : (
          <S.LogoutIcon onClick={logout} />
        )}
      </S.MainMenu>
    </S.Wrapper>
  );
};

export default Navigation;
