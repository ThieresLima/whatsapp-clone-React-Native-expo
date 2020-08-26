import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import { MaterialIcons, Entypo } from '@expo/vector-icons';

import Navigation from '../../Navigation';

import styles from './styles';


export default function Header() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logo}>WhatsApp</Text>

                <View style={styles.icons}>
                    <MaterialIcons name="search" size={24} color="#9fa3a7" />
                    <Entypo name="dots-three-vertical" size={20} color="#9fa3a7" />
                </View>
            </View>
        </SafeAreaView>
    );
};