"use client";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useFetchUserQuery } from "../../redux/features/auth/authApi";
import { userLoggedIn } from "../../redux/features/auth/authSlice";

const TokenProvider = ({ children }) => {
  const token = Cookies.get("token");
  console.log(token);
  const { data: userInfo, error } = useFetchUserQuery();
  console.log(userInfo)
  const dispatch = useDispatch();
  dispatch(
    userLoggedIn({
      accessToken: token,
      user: userInfo?.user,
    })
  );

  return <div>{children}</div>;
};

export default TokenProvider;
