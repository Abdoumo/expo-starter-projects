import React, { createContext, useContext, useEffect, useState } from "react";
import { images } from "../constants";


const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
const GlobalProvider = ({ children }) => {

    const user01 = {
        email: 'bedoushop@gmail.com',
        username: 'abdou',
        password: 'abdou',
        role: 'admin',
        image: images?.logoV2
    
    }
  const [isLogged, setIsLogged] = useState(true);
  const [user, setUser] = useState(user01);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    // getCurrentUser()
    //   .then((res) => {
    //     if (res) {
    //       setIsLogged(true);
    //       setUser(res);
    //     } else {
    //       setIsLogged(false);
    //       setUser(null);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
        loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
