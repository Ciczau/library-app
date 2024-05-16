import { useForm } from "react-hook-form";
import * as S from "./LoginRegister.styled";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { loginUserRequest, registerUserRequest } from "../../api/userRequests";

type Props = {
  type: "login" | "register";
};

const LoginRegister = ({ type }: Props) => {
  const [cookie, setCookie] = useCookies(["refreshToken"]);

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data: Object) => {
    const res =
      type === "register"
        ? await registerUserRequest(data)
        : await loginUserRequest(data);
    if (res.success) {
      if (type === "login") {
        setCookie("refreshToken", res.token, { path: "/" });
        navigate("/");
      } else {
        navigate("/login");
      }
    }
  };
  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <h1>{type === "register" ? "Sign up" : "Sign in"}</h1>
        <S.Input {...register("email")} placeholder="Email" />
        {type === "register" && (
          <S.Input {...register("name")} placeholder="Name" />
        )}
        <S.Input
          {...register("password")}
          placeholder="Password"
          type="password"
        />
        <S.Information>
          {type === "register" ? (
            <>
              Already have an account?{" "}
              <b onClick={() => navigate("/login")}>Sign in!</b>
            </>
          ) : (
            <>
              Don&apos;t have an account?{" "}
              <b onClick={() => navigate("/register")}>Sign up!</b>
            </>
          )}
        </S.Information>
        <S.Button>{type === "register" ? "Sign up" : "Sign in"}</S.Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default LoginRegister;
