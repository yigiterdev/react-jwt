import {useEffect, useState} from "react";
import useRefreshToken from "./useRefreshToken";
import {axiosAPIPrivate} from "../../api/api";
import {useAuthContext} from "../../context/auth/AuthContext";

const useAxiosPrivate = () => {
  const refreshToken = useRefreshToken();
  const [isRequestPending, setIsRequestPending] = useState<boolean>(true);
  const {user} = useAuthContext();

  useEffect(() => {
    const requestIntercept = axiosAPIPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${user?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosAPIPrivate.interceptors.response.use(
      (response) => {
        setIsRequestPending(false);
        return response;
      },
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refreshToken();

          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosAPIPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosAPIPrivate.interceptors.request.eject(requestIntercept);
      axiosAPIPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [user, refreshToken, isRequestPending]);

  return {
    axiosAPIPrivate,
    isRequestPending
  };
};

export default useAxiosPrivate;
