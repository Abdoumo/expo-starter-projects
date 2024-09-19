import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { images } from "../../constants";
import { CustomButton, FormField } from "../../components";
import { useGlobalContext } from "../../context/createContext";
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../firebase';




const SignIn = () => {
  const { setUser,user, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });



  const OnFinish = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
  
    try {
      setSubmitting(true);
  
      const userCredential = await signInWithEmailAndPassword(auth, form.email, form.password);
      
      // Storing the user data in AsyncStorage
      await AsyncStorage.setItem('UserLogin', JSON.stringify(userCredential.user));
      
      // Logging the user data that was just stored  
      setUser(userCredential.user);
  
      // Retrieving and logging the user data from AsyncStorage
      const savedUser = await AsyncStorage.getItem('UserLogin');
      if (userCredential) {
        setIsLogged(true);
        router.replace("/home");
      } else {
        Alert.alert("You are wrong", "Mistake on the password/email");
      }
  
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };
  
  



  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);

    try {
      const UserLogin = userAuth(form);

      if(UserLogin){
        setUser(UserLogin);
        setIsLogged(true);
        router.replace("/home");
        
      }else {
        Alert.alert("You are wrong", "Mistake on the passwor/email");
      }

    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-thirdley h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Image
            source={images.AlloTabibi}
            resizeMode="contain"
            className="w-[205px] h-[115px]"
          />

          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Log in to Allo Tabibi
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlePress={OnFinish}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
