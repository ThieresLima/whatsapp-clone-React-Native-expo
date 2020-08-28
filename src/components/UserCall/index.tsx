import React from 'react';
import { View, Image, Text } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import avatar1 from '../../images/avatar1.jpg'
import avatar2 from '../../images/avatar2.jpg'

import styles from './styles';

export default function UserCall() {
    return (
        <View style={styles.container}>
            <View style={styles.myCalls}>

                <View>
                    <Image style={styles.img} source={avatar2} />
                </View>

                <View style={styles.info}>
                    <Text style={styles.title}>Joana</Text>
                    <Text style={styles.subTitle}>(1) ontem 20:30</Text>
                </View>
                <FontAwesome style={styles.video} name="video-camera" size={24} color='#0CB2A0' />
            </View>

            <View style={styles.myCalls}>

                <View>
                    <Image style={styles.img} source={avatar1} />
                </View>

                <View style={styles.info}>
                    <Text style={styles.title}>Anna</Text>
                    <Text style={styles.subTitle}>(2) ontem 12:30</Text>
                </View>
                <FontAwesome style={styles.video} name="video-camera" size={24} color='#0CB2A0' />
            </View>

            <View style={styles.icons}>
                <FontAwesome style={styles.pencil} name="video-camera" size={24} color="#FFF" />
                <MaterialCommunityIcons style={styles.camera} name="phone-plus" size={24} color="#FFF" />
            </View>
        </View>
    );
}
