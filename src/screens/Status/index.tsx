import React from 'react';
import { View } from 'react-native';
import ContactStatus from '../../components/ContactStatus';

import styles from './styles';

export default function Status() {
    return (
        <View style={styles.container}>
            <ContactStatus />
        </View>
    );
};