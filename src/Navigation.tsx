import React from 'react';
import { StyleSheet } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const { Navigator, Screen } = createMaterialTopTabNavigator();



import Camera from './screens/Camera';
import Home from './screens/Home';
import Status from './screens/Status';
import Calls from './screens/Calls';
import Header from './components/Header';


export default function Navigation() {
    return (
        <>
            <Header />
            <Navigator
                initialRouteName="Conversas"
                tabBarOptions={{
                    style: {
                        height: 50,
                        backgroundColor: '#293742',
                    },
                    iconStyle: {
                        marginLeft: 20
                    },
                    tabStyle: {
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: -60,
                    },
                    labelStyle: {
                        fontWeight: 'bold',
                        fontSize: 16,
                    },
                    indicatorStyle: {
                        backgroundColor: '#00AF9C',
                        height: 3,
                        marginLeft: -30
                    },
                    inactiveTintColor: '#9FA3A7',
                    activeTintColor: '#00AF9C',
                    showIcon: true,
                }}
            >
                <Screen
                    name="Camera"
                    component={Camera}

                    options={{
                        tabBarLabel: '',
                        tabBarIcon: () => {
                            return (
                                <MaterialIcons name="photo-camera" size={24} color="#9FA3A7" />
                            );
                        },
                    }}

                />
                <Screen name="Conversas" component={Home} />
                <Screen name="Status" component={Status} />
                <Screen name="Chamadas" component={Calls} />
            </Navigator>
        </>
    );
};

// const icon = StyleSheet.create({
//     icone: {
//         marginLeft: 10,
//         position: 'absolute',
//     }
// });