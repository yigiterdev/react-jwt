import {useAuthContext} from "../../context/auth/AuthContext";
import {TokenRequestResponse} from "../../api/apiTypes";
import {axiosAPI} from "../../api/api";

const useRefreshToken = () => {
  const {user, setUser} = useAuthContext();

  const refreshToken = async (token?: string) => {
    const response = await axiosAPI.post<TokenRequestResponse>(
      "/token",
      {token: token || user?.refreshToken},
      {
        headers: {"Content-Type": "application/json"}
      }
    );

    if (user) {
      const newUser = {
        ...user,
        accessToken: response.data.accessToken
      };
      setUser(newUser);
    }

    return response.data.accessToken;
  };

  return refreshToken;
};

export default useRefreshToken;
