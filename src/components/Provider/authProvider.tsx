import React, { useState, useRef, useEffect, createContext } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import axios from 'axios';
export const AuthContext = createContext<userContext | undefined>(undefined);
interface userContext {
  userData: any;
}


const AuthProvider = (props: any) => {

  const { children } = props

  const [userData, setUserData] = useState<any>({});
  const router = useRouter();
  const cookieData = Cookies.get('data');
  const data = JSON.parse(cookieData || '{}');
  useEffect(() => {
    axios.get(`https://dzulf.pythonanywhere.com/api/auth/user/${data?.user?.id}/`,)
    .then((response) => {
      setUserData(response.data);
    })
    .catch((error) => {
      setUserData(null)

      

    })

  }, [data?.user?.id]);

  return (
    <AuthContext.Provider value={{ userData }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useData = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useData must be used within a SidebarProvider");
  }
  return context;
};