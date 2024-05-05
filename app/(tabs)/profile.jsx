import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image, TouchableOpacity } from "react-native";
import { icons, images } from "../../constants";
import { CustomButton, FormField, InfoBox } from "../../components";
import { useGlobalContext } from "../../context/createContext";


const profile = () => {
  const { user, setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);

  const logout =  () => {
    
    setUser(null);
    setIsLogged(false);

    router.replace("/sign-in");
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
           <View className="w-full flex justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity
              onPress={logout}
              className="flex w-full items-end mb-10"
            >
              <Image
                source={icons.logout}
                resizeMode="contain"
                className="w-6 h-6"
              />
            </TouchableOpacity>

            <View className="w-16 h-16 border border-secondary rounded-lg flex justify-center items-center">
              <Image
                source={ user?.image }
                className="w-[90%] h-[90%] rounded-lg"
                resizeMode="cover"
              />
            </View>

            <InfoBox
              title={user?.username}
              containerStyles="mt-5"
              titleStyles="text-lg"
            />

            <View className="mt-5 flex flex-row">
              <InfoBox
                title={12}
                subtitle="Posts"
                titleStyles="text-xl"
                containerStyles="mr-10"
              />
              <InfoBox
                title="1.2k"
                subtitle="Followers"
                titleStyles="text-xl"
              />
              </View>
          </View>



          <Text className="text-3xl font-semibold text-white mt-10 font-psemibold">
          Parametre
          </Text>
           {/* 232331 */}
          

          
          {/* kkjljk */}


         
          <Text className="text-1xl pt-1 font-semibold text-white mt-10 font-psemibold">
            profil Notification
          </Text>

          {/* Profile Parameters */}

          <Text className="text-1xl pt-1 font-semibold text-white mt-10 font-psemibold">
            profil Parametre
          </Text>

          <View className="flex-row mb-2  justify-between border-2 border-secondary  items-center  bg-primary rounded-lg p-4 px-2 shadow-lg shadow-slate-100">
            <Text className='text-white'>Changer Le nom</Text>
            <Text className='text-gray-400'></Text>
          </View>
          <View className="flex-row mb-2  justify-between border-2 border-secondary  items-center  bg-primary rounded-lg p-4 px-2 shadow-lg shadow-slate-100">
            <Text className='text-white'>Fonction</Text>
            <Text className='text-gray-400'></Text>
          </View>
          <View className="flex-row mb-2  justify-between border-2 border-secondary  items-center  bg-primary rounded-lg p-4 px-2 shadow-lg shadow-slate-100">
            <Text className='text-white'>Date de naissanse</Text>
            <Text className='text-gray-400'></Text>
          </View>
          <View className="flex-row mb-2  justify-between border-2 border-secondary  items-center  bg-primary rounded-lg p-4 px-2 shadow-lg shadow-slate-100">
            <Text className='text-white'>Adress</Text>
            <Text className='text-gray-400'></Text>
          </View>
          <View className="flex-row mb-2  justify-between border-2 border-secondary  items-center  bg-primary rounded-lg p-4 px-2 shadow-lg shadow-slate-100">
            <Text className='text-white'>Payment Methodes</Text>
            <Text className='text-gray-400'>Cash</Text>
          </View>







        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default profile

