import React from 'react';
import { View } from 'react-native';
import UserStatus from '../../components/UserStatus';

import styles from './styles';

export default function Status() {
    return (
        <View style={styles.container}>
            <UserStatus />
        </View>
    );
};