import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import { CustomButton, Loader } from "../components";
import { useGlobalContext } from "../context/createContext";

const Welcome = () => {
  const { loading, isLogged } = useGlobalContext();


  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-fourtley h-full">
      {/* <Loader isLoading={loading} /> */}

      <ScrollView
      className='bg-thirdley'
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">

          <Image
            source={images.AlloTabibi}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
            instant doctor{"\n"}
            consultations {" "}
              <Text style={{color:'#ec2329'}} className="text-secondary-200">Health Blue</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
          Allo Tabibi is a healthcare app that connects users with doctors for quick service Allo Tabibis, appointments, and medical advice, ensuring convenient access to healthcare services.
          </Text>
          {
            isLogged ? (
              <CustomButton
                title="Book Now!"
                handlePress={() => router.push("/home")}
                containerStyles="w-full mt-7"
              />
            ) : (

               <CustomButton
                title="Continue with Email"
                handlePress={() => router.push("/sign-in")}
                containerStyles="w-full mt-7"
              />
            )
          }
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#1c93d4" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
