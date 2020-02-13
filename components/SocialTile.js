import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/styles';
import { extractSessionDay } from '../utils/sessions';

export default function SocialTile({
    navigation: {
        navigate,
    },
    onPress,
    event: {
        name = "",
        type = "",
        day = "",
        time = "",
        location = "",
        description = "",
    } = {},
    addedToSchedule,
}) {

    return (
        <TouchableOpacity
            style={[
                styles.sessionTile,
                addedToSchedule && styles.selectedSession,
                styles.marginBottomLarge,
            ]}
        // onPress={onPress || (() => navigate("SessionInfo", {
        //     sessionName: sessiontype.toUpperCase(),
        //     id,
        // }))}
        >
            <View style={[
                styles.sessionTileBar,
                styles.blackBackground,
            ]} />
            <View>
                <Text style={[
                    styles.h3,
                    styles.marginBottomXxSmall,
                ]} >{name}</Text>
                <Text style={[
                    styles.text,
                ]} >{location}</Text>
                {description ? (
                    <Text style={[
                        styles.text,
                    ]} >{description}</Text>
                ) : null}
            </View>
        </TouchableOpacity>
    );
}
