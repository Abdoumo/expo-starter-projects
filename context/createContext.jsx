import React, { createContext, useContext, useEffect, useState } from "react";


const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
const GlobalProvider = ({ children }) => {
    const user01 = {
        email: 'bedou@k.com',
        username: 'abdou',
        password: 'abdou',
        role: 'admin',
    
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
