import React from 'react';
import { View } from 'react-native';
import Chats, { Chat } from '../../components/Chats';

import { UserChat } from '../../api';

import styles from './styles';

const data = UserChat();

export default function Home() {
    return (
        <View style={styles.container}>
            {data.map((data: Chat) => {
                return (
                    <Chats chat={data} key={data.id} />
                );
            })}

        </View>
    );
};