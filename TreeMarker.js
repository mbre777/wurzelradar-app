import { useState, React } from "react";
import { View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const TreeMarker = ({ navigation, tree }) => {

    onMarkerPressed = (tree) => {
        navigation.navigate('Details', { title: tree.title });
    }

    return (
        <Marker
            key={tree.id}
            coordinate={{
                latitude: tree.lat,
                longitude: tree.lng,
            }}
            onPress={() => this.onMarkerPressed(tree)}
        >
        </Marker>
    );
};

export default TreeMarker;
