import React from 'react';
import { View, ScrollView } from 'react-native';
import Chats, { Chat } from '../../components/Chats';

import { UserChat } from '../../api';

import styles from './styles';

const data = UserChat();

export default function Home() {
    return (
        <View style={styles.container}>
            <ScrollView>
                {data.map((data: Chat) => {
                    return (
                        <Chats chat={data} key={data.id} />
                    );
                })}
            </ScrollView>
        </View>
    );
};