import React, { createContext, useContext, useEffect, useState } from "react";
import { images } from "../constants";
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase';
import AsyncStorage from "@react-native-async-storage/async-storage";




const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
const GlobalProvider = ({ children }) => {

    
  // const [isLogged, setIsLogged] = useState(true);
  // const [user, setUser] = useState(user01);
  // const [loading, setLoading] = useState(true);

  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(AsyncStorage.getItem('UserLogin') || {});
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);


  const FirebaseData = () => {
    const { setData, data, userLogin } = useContext(AppContext)
    const starCountRef = ref(db);
    useEffect(() => {
      var emailCount = userLogin?.email?.replace('.', '_')
        onValue(starCountRef, (snapshot) => {
        const dataResult = snapshot.val();
        setData(dataResult[`${emailCount}`])
        localStorage.setItem('myData', JSON.stringify(dataResult[`${emailCount}`]));        
        
    });
      
    }, [db, userLogin])
   
}

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
        setData,
        data,
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
