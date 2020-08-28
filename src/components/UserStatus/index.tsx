import React from 'react';
import { View, Image, Text } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import avatar from '../../images/avatar.jpg'
import avatar1 from '../../images/avatar1.jpg'
import avatar2 from '../../images/avatar2.jpg'

import styles from './styles';

export default function UserStatus() {
    return (
        <View>
            <View style={styles.myStatus}>
                <View>
                    <Image style={styles.img} source={avatar} />
                    <AntDesign style={styles.icon} name="plus" size={22} color="#fff" />
                </View>

                <View style={styles.info}>
                    <Text style={styles.title}>Meu Status</Text>
                    <Text style={styles.subTitle}>Toque para atualizar seu status</Text>
                </View>
            </View>

            <Text style={[styles.subTitle, styles.att]}>Atualizações recentes</Text>

            <View style={styles.myStatus}>

                <View>
                    <Image style={styles.img} source={avatar2} />
                </View>

                <View style={styles.info}>
                    <Text style={styles.title}>Joana</Text>
                    <Text style={styles.subTitle}>ontem 16:30</Text>
                </View>
            </View>

            <View style={styles.myStatus}>

                <View>
                    <Image style={styles.img} source={avatar1} />
                </View>

                <View style={styles.info}>
                    <Text style={styles.title}>Anna</Text>
                    <Text style={styles.subTitle}>ontem 14:30</Text>
                </View>
            </View>

            <View style={styles.icons}>
                <FontAwesome style={styles.pencil} name="pencil" size={24} color="#FFF" />
                <FontAwesome style={styles.camera} name="camera" size={24} color="#FFF" />
            </View>
        </View>
    );
}
