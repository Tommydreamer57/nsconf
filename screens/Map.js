import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import createNavigationOptions from '../navigation/navigation-options';
import styles, { Window } from '../styles/styles';

Map.navigationOptions = createNavigationOptions("Map");

const MAPS = [{
    match: /alta/i,
    source: require('../assets/maps/Alta.png'),
}, {
    match: /big\s*cottonwood/i,
    source: require('../assets/maps/BigCottonwood.png'),
}, {
    match: /brighton/i,
    source: require('../assets/maps/Brighton.png'),
}, {
    match: /deer\s*valley/i,
    source: require('../assets/maps/DeerValley.png'),
}, {
    match: /executive\s*board/i,
    source: require('../assets/maps/ExecutiveBoard.png'),
}, {
    match: /ballroom/i,
    source: require('../assets/maps/GrandBallroom.png'),
}, {
    match: /powder/i,
    source: require('../assets/maps/PowderMountain.png'),
}, {
    match: /sidewinder/i,
    source: require('../assets/maps/Sidewinder.png'),
}, {
    match: /snowbird/i,
    source: require('../assets/maps/Snowbird.png'),
}, {
    match: /sundance/i,
    source: require('../assets/maps/Sundance.png'),
}, {
    match: /wasatch/i,
    source: require('../assets/maps/Wasatch.png'),
}, {
    match: /wildcat/i,
    source: require('../assets/maps/Wildcat.png'),
}, {
    match: /^/,
    source: require('../assets/maps/Map.png'),
}];

export default function Map({
    navigation: {
        state: {
            params: {
                room = '',
            } = {},
        } = {},
    },
}) {
    const { source } = MAPS.find(({ match }) => room.match(match)) || {};
    return (
        <ScrollView
            maximumZoomScale={4}
            minimumZoomScale={1}
        >
            <View style={styles.view}>
                <Image
                    source={source}
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
