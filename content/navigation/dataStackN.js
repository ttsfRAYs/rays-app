import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DataMain from '../screens/data/dataMainS';
import QuakeDataScreen from '../screens/data/quakeDataS';
import TemperatureDataScreen from '../screens/data/temperatureDataS';
import WaterDataScreen from '../screens/data/waterDataS';
export default class DataStackNav extends React.Component {
    render() {
        return (
            <StackNav.Navigator>
                <StackNav.Screen name='DataMain' component={DataMain} options={{ headerShown: false }}>
                    
                </StackNav.Screen>
                <StackNav.Screen name='TemperatureData' component={TemperatureDataScreen} options={{ headerShown: false }}>

                </StackNav.Screen>
                <StackNav.Screen name='WaterData' component={WaterDataScreen} options={{ headerShown: false }}>

                </StackNav.Screen>
                <StackNav.Screen name='QuakeData' component={QuakeDataScreen} options={{ headerShown: false }}>

                </StackNav.Screen>
            </StackNav.Navigator>
        )
    }
}

var StackNav = createStackNavigator();