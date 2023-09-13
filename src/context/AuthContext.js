import React, { createContext, useContext, useState } from 'react';

// 컨텍스트 생성
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null); // 사용자 정보 상태

  const login = (user) => {
    // 로그인 로직을 여기에 구현
    setUserInfo(user);
  };

  const logout = () => {
    // 로그아웃 로직을 여기에 구현
    setUserInfo(null);
  };

  return (
    <AuthContext.Provider value={{ userInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};