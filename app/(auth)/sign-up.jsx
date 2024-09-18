import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from '../../firebase';
import { images } from "../../constants";
import { CustomButton, FormField } from "../../components";

const SignUp = () => {

  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const SignUpFOrm = async (e) => {
  
    // Check for empty fields
    if (form.username === "" || form.email === "" || form.password === "") {
      return Alert.alert("Error", "Please fill in all fields");
    }
  
    setSubmitting(true); // Set the submitting state
  
    try {
      // Create user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
    
      // Update user profile with the username
      await updateProfile(userCredential.user, { displayName: form.username });
      
      // Log the updated user info to verify the displayName is saved
      console.log("Updated user:", userCredential.user);
    
      // Navigate to sign-in screen only after updating the profile
      router.replace("/sign-in");
    } 
    catch (error) {
      // Catch and display error message
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false); // Reset submitting state
    }
  };
  
    

        // try {

        //   router.replace("/home");
        // } catch (error) {
        //   Alert.alert("Error", error.message);
        // } finally {
        //   setSubmitting(false);
        // }
        // set(ref(db), {
          

        // }).then(alert('submitted')).catch(err => alert(err))


  const submit = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);
    try {

      router.replace("/sign-in");
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
            className="w-[300px] h-[75px]"
          />

          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Sign Up to Allo Tabibi
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />

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
            title="Sign Up"
            handlePress={SignUpFOrm}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  
  )
}

export default SignUp
