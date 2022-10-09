import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import DashboardScreen from '../screens/dashboardS';
import DisasterScreen from '../screens/disasterS';
import DataStackNav from './dataStackN';
import { SafeAreaView } from 'react-native';
import styles from './styles';

var BotTabN = createBottomTabNavigator();

export default class BottomTabNav extends React.Component
{
  render() {
    return (
        <BotTabN.Navigator barStyle={styles.barStyle} options={{headerShown:false}}>
          <BotTabN.Screen name='Data' component={DataStackNav}>
            
          </BotTabN.Screen>
          <BotTabN.Screen name='Dashboard' component={DashboardScreen}>
            
          </BotTabN.Screen>
          <BotTabN.Screen name='Disasters' component={DisasterScreen}>
            
          </BotTabN.Screen>
        </BotTabN.Navigator>
    );
  }
}
