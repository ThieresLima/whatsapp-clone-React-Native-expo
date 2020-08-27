import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

import styles from './styles';

export interface Chat {
    id: number;
    avatar: any;
    name: string;
    contact: string;
    hour: string;
    total: string;
}

interface ChatProps {
    chat: Chat;
}

const Chats: React.FC<ChatProps> = ({ chat }) => {
    return (
        <View>
            <TouchableOpacity style={styles.container}>
                <Image style={styles.img} source={chat.avatar} />

                <View style={styles.group}>
                    <Text style={styles.groupName}>{chat.name}</Text>
                    <Text style={styles.contact}>{chat.contact}{': Lorem ipsum...'}</Text>
                </View>

                <View style={styles.info}>
                    <Text style={styles.hour}>{chat.hour}</Text>
                    <Text style={styles.total}>{chat.total}</Text>
                </View>

            </TouchableOpacity>
        </View>
    );
};

export default Chats;