import { Stack } from 'expo-router'
import React from 'react'
import { StatusBar } from 'react-native'
import { Loader } from '../../components'

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      {/* <Loader isLoading={loading} /> */}
      <StatusBar backgroundColor="#1361be" style="light" />
    </>
  )
}

export default AuthLayout
