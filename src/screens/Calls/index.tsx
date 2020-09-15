import React from 'react';
import { View } from 'react-native';
import ContactCall from '../../components/ContactCall';

import styles from './styles';

export default function Calls() {
    return (
        <View style={styles.container}>
            <ContactCall />
        </View>
    );
};