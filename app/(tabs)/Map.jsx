import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Map = () => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 36.8971, // Annaba latitude
    longitude: 7.7571, // Annaba longitude
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  return (
    <SafeAreaView style={styles.container}>
      <MapView style={styles.map} region={mapRegion}>
        <Marker coordinate={{ latitude: 36.8971, longitude: 7.7571 }} title="Annaba" />
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Map;
