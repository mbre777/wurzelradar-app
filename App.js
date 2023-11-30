import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} provider={PROVIDER_GOOGLE} initialRegion={{
          latitude: 48.2083,
          longitude: 16.3731,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        }} mapType="standard"></MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});