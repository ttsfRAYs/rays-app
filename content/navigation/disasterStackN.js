import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InfoScreen from '../screens/disaster/infoS';
import DisasterScreen from '../screens/disaster/disasterS';
export default class DisasterStackNav extends React.Component {
    render() {
        return (
            <StackNav.Navigator>
                <StackNav.Screen name='DisasterScreen' component={DisasterScreen} options={{ headerShown: false }}/>

                <StackNav.Screen name='InfoScreen' component={InfoScreen} options={{ headerShown: false }}/>

                
            </StackNav.Navigator>
        )
    }
}

var StackNav = createStackNavigator();