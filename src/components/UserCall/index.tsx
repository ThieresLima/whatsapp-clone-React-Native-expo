import React from 'react';
import { View, Image, Text } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import avatar1 from '../../images/avatar1.jpg'
import avatar2 from '../../images/avatar2.jpg'

import styles from './styles';
import User from '../User';

export default function UserCall() {
    return (
        <View style={styles.container}>

            <User
                avatar={avatar1}
                name="Joana"
                subTitle="ontem 14:30"
                icon={<FontAwesome name="video-camera" size={20} color='#0CB2A0' />}
            />

            <User
                avatar={avatar2}
                name="Anna"
                subTitle="ontem 12:30"
                icon={<FontAwesome name="video-camera" size={20} color='#0CB2A0' />}
            />

            <View style={styles.icons}>
                <FontAwesome style={styles.pencil} name="video-camera" size={20} color="#FFF" />
                <MaterialCommunityIcons style={styles.camera} name="phone-plus" size={24} color="#FFF" />
            </View>
        </View>
    );
}
