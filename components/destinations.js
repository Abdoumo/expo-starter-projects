import { View, Text, TouchableOpacity, Image, Linking, Alert } from 'react-native'
import React, { useState } from 'react'
import { destinationData } from '../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient'
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { Redirect, router } from "expo-router";
import { useGlobalContext } from '../context/createContext';
import * as WebBrowser from 'expo-web-browser';
import pdf from '../assets/pdf/نصائح البحارة.pdf'
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';



export default function Destinations() {
    const navigation = useNavigation();
  return (
    <View className="mx-4 flex-row justify-between flex-wrap">
      {
        destinationData.map((item, index)=>{
            return (
                <DestinationCard navigation={navigation} item={item} key={index} />
            )
        })
      }
    </View>
  )
}

const openPdf = async () => {
  try {
    // Load the PDF asset
    const pdfAsset = Asset.fromModule(require('../assets/pdf/نصائح البحارة.pdf'));
    await pdfAsset.downloadAsync(); // Ensure the asset is downloaded

    const pdfUri = pdfAsset.uri; // Get the URI of the PDF
    await WebBrowser.openBrowserAsync(pdfUri); // Open the PDF
  } catch (error) {
    console.error('Failed to open PDF:', error);
    Alert.alert('Error', 'Failed to open PDF');
  }
};

  const navigateToDestination = (item, path) => {
       
      router.push({
          pathname: 'ACons',
          params: {item :JSON.stringify(item) }
      });
    };

const DestinationCard = ({item, navigation})=>{
  const halat = ['conseille' , 'A propos']
  const { user } = useGlobalContext();
    const [isFavourite, toggleFavourite] = useState(false);
    const onPressCard = () => {

      if(halat.includes(item.title)){
        if(item.title == 'conseille'){
          openPdf(item)
        }else {
          navigateToDestination(item)
        }
      }else {
     
        const openWhatsApp = () => {
          const phoneNumber = '+213559230000';  // Replace with the actual number
          const message = `hello it's ${user.displayName} with email of ${user.email} i'm here for  ${item?.title}`;    // Replace with your message
          const url = item.title === 'conseille' ? 'https://files.fm/f/vxhr9n8jr6' :  `whatsapp://send?text=${encodeURIComponent(message)}&phone=${phoneNumber}`;
          
          Linking.canOpenURL(url)
            .then(supported => {
              if (supported) {
                return Linking.openURL(url);
              } else {
                Alert.alert(item.title === 'conseille' ? 'Error Cannot open this URL' :  'WhatsApp is not installed on your device  Error');
              }
            })
            .catch(err => console.error('An error occurred', err));
        };
      }
    }

    return (
        <TouchableOpacity
            onPress={onPressCard}
            style={{width: wp(44), height: wp(65)}}
            className="flex justify-end relative p-4 py-6 space-y-2 mb-5">
                <Image
                    source={item?.image}
                    style={{width: wp(44), height: wp(65), borderRadius: 35}}
                    className="absolute"
                />

            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={{width: wp(44), height: hp(15), borderBottomLeftRadius: 35, borderBottomRightRadius: 35}}
                start={{x: 0.5, y: 0}}
                end={{x: 0.5, y: 1}}
                className="absolute bottom-0"
            />

            <TouchableOpacity onPress={()=> toggleFavourite(!isFavourite)} style={{backgroundColor: 'rgba(255,255,255,0.4)'}} className="absolute top-1 right-3 rounded-full p-3">
                <HeartIcon size={wp(5)} color={isFavourite? "red": "white"} />
            </TouchableOpacity>

            <Text style={{fontSize: wp(4)}} className="text-white font-semibold">{item.title}</Text>
            <Text style={{fontSize: wp(2.2)}} className="text-white">{item.shortDescription}</Text>

        </TouchableOpacity>
    )
}