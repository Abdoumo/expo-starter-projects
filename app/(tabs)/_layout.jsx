import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants/'
const TabsLayout = () => {

  const TabIcon = ({ icon, color, name, focused }) => {
    return (
      <View  className="items-center justify-center gap-2">
        <Image source={icon}
        resizeMode = "contain"
        tintColor={color}
        className ='w-6 h-6'
        />
        <Text  className={`${focused} ? 'font-psemibold : font-pregular text-xs`} style={{color: color}}>{name}</Text>
        
      </View> 
      
    )
  }

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel:false,
          tabBarActiveTintColor:'#FFA001',
          tabBarInActiveTintColor:'#CDCDE0',
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            height:84,
            borderTopColor: "#232533",
          }
        }}
      >
        <Tabs.Screen name='home' 
        options={{
          title: 'home',
          headerShown: false, 
          tabBarIcon: ({ color , focused }) => (
            <TabIcon
              icon = {icons?.home}
              focused={focused}
              name={'Home'}
              color={color}
            />  
          )
        }}
        />

<Tabs.Screen name='bookmark' 
        options={{
          title: 'Bookmark',
          headerShown: false, 
          tabBarIcon: ({ color , focused }) => (
            <TabIcon
              icon = {icons?.bookmark}
              focused={focused}
              name={'Bookmark'}
              color={color}
            />  
          )
        }}
        />

        <Tabs.Screen name='Map' 
        options={{
          title: 'Map',
          headerShown: false, 
          tabBarIcon: ({ color , focused }) => (
            <TabIcon
              icon = {icons.plus}
              focused={focused}
              name={'Map'}
              color={color}
            />  
          )
        }}
        />

<Tabs.Screen name='profile' 
        options={{
          title: 'Profile',
          headerShown: false, 
          tabBarIcon: ({ color , focused }) => (
            <TabIcon
              icon = {icons?.profile}
              focused={focused}
              name={'Profile'}
              color={color}
            />  
          )
        }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout