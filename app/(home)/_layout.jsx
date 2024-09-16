import { StyleSheet} from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'

const LayoutHome = () => {
    return (
        <>
          <Stack>

            <Stack.Screen
              name="home"
              options={{
                  headerShown: false,
                }}
                />
                </Stack>
            </>
            )
}

export default LayoutHome

const styles = StyleSheet.create({})