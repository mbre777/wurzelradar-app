import * as React from 'react';
import { StyleSheet, Dimensions, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import TreeMarker from "./TreeMarker";

function DetailScreen({ route, navigation }) {
  const { title } = route.params
  return (
    <View>
      <Text>Title: {title}</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Wurzelradar</Text>
      <Button
        title="Map"
        onPress={() => navigation.navigate('Map')}
      />
    </View>
  );
}

function MapScreen({ navigation }) {

  const trees = [
    { id: 1, title: "Tree 1", lat: 48.2083, lng: 16.3731 },
    { id: 2, title: "Tree 2", lat: 48.2099, lng: 16.3752 },
    { id: 3, title: "Tree 3", lat: 48.2155, lng: 16.3763 }
  ];

  return (
    <MapView style={styles.mapStyle} provider={PROVIDER_GOOGLE} initialRegion={{
      latitude: 48.2083,
      longitude: 16.3731,
      latitudeDelta: 0.03,
      longitudeDelta: 0.03,
    }} mapType="standard">
      {trees.map(tree => {
        return (
          <TreeMarker navigation={navigation} key={tree.id} tree={tree} />
        );
      })}
    </MapView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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