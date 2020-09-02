import React, { ReactNode } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import avatar1 from '../../images/avatar1.jpg'
import avatar2 from '../../images/avatar2.jpg'

import styles from './styles';

interface UserProps {
    avatar: any;
    name: string;
    subTitle: string;
    icon?: ReactNode;
}

const User: React.FC<UserProps> = ({ avatar, name, subTitle, icon }) => {
    return (
        <TouchableOpacity>
            <View style={styles.status}>

                <View>
                    <Image style={styles.img} source={avatar} />
                </View>

                <View style={styles.info}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.subTitle}>{subTitle}</Text>
                </View>

                <View style={styles.icon}>
                    {icon}
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default User;
