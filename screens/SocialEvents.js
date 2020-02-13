import React from 'react';
import { Text, FlatList, ScrollView, View } from 'react-native';
import SocialTile from "../components/SocialTile";
import createNavigationOptions from '../navigation/navigation-options';
import { StorageConsumer } from '../storage/StorageProvider';
import styles from '../styles/styles';

SocialEvents.navigationOptions = createNavigationOptions("Social Events");

export default function SocialEvents({
    navigation,
}) {
    return (
        <StorageConsumer>
            {({
                socials = [],
            }) => (
                    <>
                        {/* <Text>{JSON.stringify(socials)}</Text> */}
                        <ScrollView>
                            <View style={styles.view}>
                                <FlatList
                                    keyExtractor={({ id }) => id}
                                    data={socials}
                                    renderItem={({ item: event }) => (
                                        <SocialTile
                                            navigation={navigation}
                                            event={event}
                                        />
                                    )}
                                />
                            </View>
                        </ScrollView>
                    </>
                )}
        </StorageConsumer>
    );
}
