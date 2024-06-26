import { View, Text, Image, TouchableOpacity, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { ClockIcon, HeartIcon, MapPinIcon, SunIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../theme';
import { useRoute } from '@react-navigation/native';
import { useLocalSearchParams } from 'expo-router';

const ios = Platform.OS == 'ios';
const topMargin = ios? '': 'mt-10';



export default function DestinationScreen(paramKey, nav) {
    const { item } = useLocalSearchParams()
    const items = JSON.parse(item)
    
    const navigation = useNavigation();
    const [isFavourite, toggleFavourite] = useState(false);

  return (
    <View className="bg-white flex-1">
        {/* destination image */}
        <Image source={items?.image} style={{width: wp(100), height: hp(55)}} />
        <StatusBar style={'light'} />

        {/* back button */}
        <SafeAreaView className={"flex-row justify-between itemss-center w-full absolute" + topMargin}>
            <TouchableOpacity
                onPress={()=> navigation.goBack()}
                className="p-2 rounded-full ml-4"
                style={{backgroundColor: 'rgba(255,255,255,0.5)'}}
            >
                <ChevronLeftIcon size={wp(7)} strokeWidth={4} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=> toggleFavourite(!isFavourite)}
                className="p-2 rounded-full mr-4"
                style={{backgroundColor: 'rgba(255,255,255,0.5)'}}
            >
                <HeartIcon size={wp(7)} strokeWidth={4} color={isFavourite? "red": "white"} />
            </TouchableOpacity>
        </SafeAreaView>

        {/* title & descritpion & booking button */}
        <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}} className="px-5 flex flex-1 justify-between bg-white pt-8 -mt-14">
            <ScrollView showsVerticalScrollIndicator={false} className="space-y-5">
                <View className="flex-row justify-between itemss-start">
                    <Text style={{fontSize: wp(7)}} className="font-bold flex-1 text-neutral-700">
                        {items?.title}
                    </Text>
                    <Text style={{fontSize: wp(7), color: theme.text}} className="font-semibold">
                        $ {items?.price}
                    </Text>
                </View>
                <Text style={{fontSize: wp(3.7)}} className="text-neutral-700 tracking-wide mb-2">{items?.longDescription}</Text>
                <View className="flex-row justify-between mx-1">
                    <View className="flex-row space-x-2 itemss-start">
                        <ClockIcon size={wp(7)} color="skyblue" />
                        <View className="flex space-y-2">
                            <Text style={{fontSize: wp(4.5)}} className="font-bold text-neutral-700">{items?.duration}</Text>
                            <Text className="text-neutral-600 tracking-wide">Duration</Text>
                        </View>
                    </View>
                    <View className="flex-row space-x-2 itemss-start">
                        <MapPinIcon size={wp(7)} color="#f87171" />
                        <View className="flex space-y-2">
                            <Text style={{fontSize: wp(4.5)}} className="font-bold text-neutral-700">{items?.distance}</Text>
                            <Text className="text-neutral-600 tracking-wide">Distance</Text>
                        </View>
                    </View>
                    <View className="flex-row space-x-2 itemss-start">
                        <SunIcon size={wp(7)} color="orange" />
                        <View className="flex space-y-2">
                            <Text style={{fontSize: wp(4.5)}} className="font-bold text-neutral-700">{items?.weather}</Text>
                            <Text className="text-neutral-600 tracking-wide">Sunny</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={{backgroundColor: theme.bg(0.8), height: wp(15), width: wp(50)}} className="mb-6 mx-auto flex justify-center text-center itemss-center rounded-full">
                <Text className="text-white font-bold text-center" style={{fontSize: wp(5.5)}}>Book now</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}