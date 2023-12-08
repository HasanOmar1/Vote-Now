import { createContext, useContext, useState } from "react";

export const UserInfoContext = createContext();

export default function UserInfoProvider({ children }) {
  const [userInfo, setUserInfo] = useState("");

  function changeUserInfo(user) {
    setUserInfo(user);
  }

  return (
    <UserInfoContext.Provider value={{ userInfo, changeUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
}

export const getUserInfo = () => useContext(UserInfoContext);
