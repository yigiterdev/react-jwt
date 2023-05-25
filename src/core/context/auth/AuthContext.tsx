import {createContext, ReactNode, useContext, useState} from "react";

import {User} from "./userStateTypes";

const AuthContext = createContext({
  user: null as User | null,
  setUser: (() => undefined) as React.Dispatch<React.SetStateAction<User | null>>
});

AuthContext.displayName = "AuthContext";

function AuthContextProvider({children}: {children: ReactNode}) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser
      }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  const {user, setUser} = useContext(AuthContext);

  return {user, setUser};
}

export {AuthContext, AuthContextProvider, useAuthContext};
