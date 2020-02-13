import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Alert, Image, ImageBackground, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { sendMessage } from '../storage/service';
import { SIZES, Window, COLORS } from '../styles/styles';

export const iconPrefix = Platform.OS === "ios" ?
    "ios-"
    :
    "md-";

const links = [
    // [
    {
        name: "SCHEDULE",
        to: "Schedule",
        icon: "add-circle",
    },
    {
        name: "SPEAKERS",
        to: "AllSpeakers",
        icon: "person",
    },
    {
        name: "MAP",
        to: "Map",
        icon: "map",
    },
    {
        name: "SOCIAL EVENTS",
        to: "SocialEvents",
        icon: "heart",
    },
    {
        name: "FEEDBACK",
        to: "FeedbackSelect",
        icon: "paper",
    },
    // ],
    // [
    // {
    //     name: "SESSIONS",
    //     to: "AllSessions",
    //     icon: "microphone",
    // },
    // {
    //     name: "NOTIFICATIONS",
    //     to: "Notifications",
    //     icon: "notifications",
    // },
    // {
    //     name: "CONTACT",
    //     // url: "sms:435-612-2474",
    //     url: "sms:770-530-1892",
    //     icon: "text",
    // },
    // ],
    // [
    {
        name: "AUDIO",
        url: "https://vimeo.com/ondemand/northstar2018/256616872",
        icon: "play-circle",
    },
    {
        name: "DONATE",
        url: "https://www.northstarlds.org/donate",
        icon: "cash",
    },
    // ],
];

Home.navigationOptions = {
    header: null,
};

export default function Home({
    navigation: {
        navigate,
    },
}) {
    return (
        <ImageBackground
            source={require('../assets/BKGD.png')}
            style={styles.background}
        >
            <Image
                source={require('../assets/LogoTop.png')}
                style={styles.topPadding}
            />
            <View
                style={styles.links}
            >
                {links
                    // .map((row, i) => (
                    //     <View
                    //         key={i}
                    //         style={styles.row}
                    //     >
                    //         {row
                    .map(({
                        to,
                        icon,
                        name,
                        url,
                    }, j) => (
                            <TouchableOpacity
                                key={j}
                                style={styles.homeLink}
                                onPress={to ?

                                    () => navigate(to)
                                    :
                                    Platform.OS === 'android' && url.match(/sms/) ?
                                        sendMessage
                                        :
                                        () =>
                                            Linking.canOpenURL(url) ?
                                                Linking.openURL(url)
                                                :
                                                Alert.alert(`Cannot open url: ${url}`)}
                            >
                                <Ionicons
                                    name={iconPrefix + icon}
                                    size={SIZES.homeIcon}
                                    color='white'
                                // style={styles.icon}
                                />
                                <Text
                                    style={styles.text}
                                >
                                    {name}
                                    {!to && url && Linking.canOpenURL(url) ? (
                                        <>
                                            &nbsp;&nbsp;
                                                <Ionicons
                                                name={iconPrefix + "open"}
                                                size={SIZES.xxxLarge}
                                                color="white"
                                            />
                                        </>
                                    ) : null}
                                </Text>
                            </TouchableOpacity>
                            //             ))}
                            // </View>
                        ))}
            </View>
            {/* <Image
                source={require('../assets/LogoBottom.png')}
                style={styles.bottomPadding}
            /> */}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
    },
    topPadding: {
        resizeMode: 'contain',
        width: Window.width * 1.2,
        marginLeft: Window.width * -0.1,
        marginRight: Window.width * -0.1,
        marginTop: Window.height * 0.03,
        height: Window.height * 0.35,
        marginBottom: Window.height * -0.025,
    },
    bottomPadding: {
        resizeMode: 'contain',
        width: Window.width * 0.5,
        height: Window.height * 0.17,
        marginLeft: Window.width * 0.25,
        marginRight: Window.width * 0.25,
        marginTop: 0,
    },
    links: {
        height: Window.height * 0.5,
        width: Window.width * 0.85,
        marginLeft: Window.width * 0.075,
        marginRight: Window.width * 0.075,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // backgroundColor: 'black',
    },
    // row: {
    //     width: '100%',
    //     flexDirection: 'row',
    //     justifyContent: 'space-evenly',
    // },
    homeLink: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        padding: SIZES.small,
        marginBottom: SIZES.medium,
        // borderWidth: 1,
        // borderColor: COLORS.white,
    },
    text: {
        color: 'white',
        fontSize: SIZES.xxxLarge,
        textAlign: 'center',
        marginLeft: SIZES.xLarge,
        textTransform: 'lowercase',
    },
});
