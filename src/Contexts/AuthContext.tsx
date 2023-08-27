import { createContext, useEffect, useState } from "react";
import { User } from '../Types/User'

interface UserContext_type {
  user: User,
  handleUserChange: any
}

export const AuthContext = createContext<UserContext_type | null>(null);

export const AuthContextProvider = ({ children }: any) => {

  const [user, setUser] = useState<User>({
    username: null,
    email: null,
    token: null
  });
  const handleUserChange = (user: User) => {

    setUser(user)
    if (user.username) {
      localStorage.setItem("username", "" + user.username)
      localStorage.setItem("token", "" + user.token)
      localStorage.setItem("email", "" + user.email)
    } else {
      localStorage.clear()
    }
  }
  useEffect(() => {
    const _default: User = {
      username: localStorage.getItem("username"),
      email: localStorage.getItem("email"),
      token: localStorage.getItem("token")
    }
    handleUserChange(_default)
  }, [])



  return (
    <AuthContext.Provider value={{ user, handleUserChange }}>
      {children}
    </AuthContext.Provider>
  );
};
