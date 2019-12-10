import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import createNavigationOptions from '../navigation/navigation-options';
import styles, { Window } from '../styles/styles';

Map.navigationOptions = createNavigationOptions("Map");

export default function Map() {
    return (
        <ScrollView
            maximumZoomScale={4}
            minimumZoomScale={1}
        >
            <View style={styles.view}>
                <Image
                    source={require('../assets/Map.png')}
                    style={{
                        width: Window.width * .9,
                        height: Window.height * .9,
                    }}
                    resizeMode="contain"
                />
            </View>
        </ScrollView>
    );
}
