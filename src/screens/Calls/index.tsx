import React from 'react';
import { View } from 'react-native';
import UserCall from '../../components/UserCall';

import styles from './styles';

export default function Calls() {
    return (
        <View style={styles.container}>
            <UserCall />
        </View>
    );
};