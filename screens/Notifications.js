import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import createNavigationOptions from '../navigation/navigation-options';
import { StorageConsumer } from '../storage/StorageProvider';
import styles, { COLORS, SIZES } from '../styles/styles';
import { iconPrefix } from './Home';

Notifications.navigationOptions = createNavigationOptions("Notifications");

export default function Notifications() {
    return (
        <StorageConsumer>
            {({ notifications, deleteNotification }) => (
                <ScrollView>
                    <View style={styles.view}>
                        <FlatList
                            keyExtractor={({ notificationID }) => notificationID}
                            data={notifications}
                            extraData={[notifications, notifications.length]}
                            ListEmptyComponent={(
                                <View style={[
                                    styles.speakerButton,
                                    styles.center,
                                ]} >
                                    <Text style={[
                                        styles.h3,
                                    ]} >No New Notifications!</Text>
                                </View>
                            )}
                            renderItem={({
                                item: {
                                    title = '',
                                    body = '',
                                    notificationID,
                                },
                            }) => (
                                    <View style={[
                                        styles.speakerButton,
                                        styles.marginBottomLarge,
                                    ]} >
                                        <View>
                                            <Text style={[
                                                styles.h3,
                                                styles.marginBottomXxSmall,
                                            ]} >{title}</Text>
                                            <Text style={[
                                                styles.text,
                                            ]} >{body}</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => deleteNotification(notificationID)}
                                        >
                                            <Ionicons
                                                name={iconPrefix + "close"}
                                                size={SIZES.large * 2.5}
                                                color={COLORS.darkGray}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                )}
                        />
                    </View>
                </ScrollView>
            )}
        </StorageConsumer>
    );
}
