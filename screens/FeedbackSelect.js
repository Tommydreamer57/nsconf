import React, { Component } from 'react';

import {
    Text,
    TextInput,
    View,
    ScrollView,
    FlatList,
    Switch,
} from 'react-native';

import createNavigationOptions from '../navigation/navigation-options';

import { StorageConsumer } from '../storage/StorageProvider';

import styles, { COLORS } from '../styles/styles';

import SessionTile from '../components/SessionTile';

import filterSessions from '../utils/filters';

export default class FeedbackSelect extends Component {

    static navigationOptions = createNavigationOptions("Select Session");

    state = {
        input: "",
        sessionId: 0,
        // I want this to default to true, but the items aren't rendering on initial load
        filterBySchedule: false,
    };

    render = () => {
        const {
            state,
            state: {
                input,
                filterBySchedule,
            },
            props: {
                navigation,
                navigation: {
                    navigate,
                },
            },
        } = this;

        return (
            <StorageConsumer>
                {context => {
                    const { allSessions } = context;
                    const sessions = Object.values(allSessions);
                    const currentFilter = filterSessions({ context, state });
                    return (
                        <ScrollView>
                            <View style={styles.view}>
                                <Text style={[
                                    styles.title,
                                    styles.marginBottomXxLarge,
                                ]} >Select A Session</Text>
                                <Text>Search</Text>
                                <TextInput
                                    clearButtonMode="always"
                                    style={[
                                        styles.searchInput,
                                        styles.marginBottomMedium,
                                    ]}
                                    placeholder="Search"
                                    value={input}
                                    onChangeText={input => this.setState({ input })}
                                />
                                <View style={styles.switchWrapper}>
                                    <Switch
                                        trackColor={{
                                            true: COLORS.blue,
                                            false: COLORS.gray,
                                        }}
                                        value={filterBySchedule}
                                        onValueChange={filterBySchedule => this.setState({ filterBySchedule })}
                                    />
                                    <Text style={styles.switchLabel}>Filter By Schedule</Text>
                                </View>
                                <View style={[
                                    styles.marginTopXxLarge,
                                ]}>
                                    <FlatList
                                        keyExtractor={({ id }) => `${id}`}
                                        data={sessions}
                                        extraData={{
                                            ...state,
                                            ...context,
                                            n: Math.random(),
                                            input,
                                            filterBySchedule,
                                            sessions,
                                            state,
                                            context,
                                        }}
                                        renderItem={({ item: session }) => (
                                            <SessionTile
                                                display={currentFilter(session)}
                                                session={session}
                                                navigation={navigation}
                                                onPress={() => navigate("Feedback", {
                                                    id: session.id,
                                                    sessionName: (session.sessiontype || '').toUpperCase(),
                                                })}
                                            />
                                        )}
                                    />
                                </View>
                            </View>
                        </ScrollView>
                    );
                }}
            </StorageConsumer>
        );
    }
}
