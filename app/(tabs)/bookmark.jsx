import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "../../context/createContext";
// import { useGlobalContext } from "../context/createContext";


const Bookmark = () => {
  const { loading, user } = useGlobalContext();

  
  const userName= user.username
  const userRole= user.role
  
  return (
    <SafeAreaView className="px-2 my-9 bg-primary h-full">
      <Text className="text-2xl bg-secondary-100 p-5 text-white font-psemibold">Bookmark</Text>
      <Text className="text-sm pt-10  text-white font-psemibold">hello {userName} </Text>
    </SafeAreaView>
  );
};

export default Bookmark;
