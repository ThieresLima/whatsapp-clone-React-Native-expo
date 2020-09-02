import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import avatar from '../../images/avatar.jpg'
import avatar1 from '../../images/avatar1.jpg'
import avatar2 from '../../images/avatar2.jpg'

import styles from './styles';
import User from '../User';

export default function UserStatus() {
    return (
        <View>
            <TouchableOpacity style={styles.myStatus}>
                <View>
                    <Image style={styles.img} source={avatar} />
                    <AntDesign style={styles.icon} name="plus" size={15} color="#fff" />
                </View>

                <View style={styles.info}>
                    <Text style={styles.title}>Meu Status</Text>
                    <Text style={styles.subTitle}>Toque para atualizar seu status</Text>
                </View>
            </TouchableOpacity>

            <Text style={[styles.subTitle, styles.att]}>Atualizações recentes</Text>

            <User
                avatar={avatar2}
                name="Anna"
                subTitle="ontem 14:30"
            />

            <User
                avatar={avatar1}
                name="Joana"
                subTitle="ontem 16:30"
            />

            <View style={styles.icons}>
                <FontAwesome style={styles.pencil} name="pencil" size={24} color="#FFF" />
                <FontAwesome style={styles.camera} name="camera" size={24} color="#FFF" />
            </View>
        </View>
    );
}
