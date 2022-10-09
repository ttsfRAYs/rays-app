import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DataStack from './content/navigation/dataStackN';
import DisasterStackNav from './content/navigation/disasterStackN';
import DashboardScreen from './content/screens/dashboardS';
import styles from './styles';
const Tab = createMaterialBottomTabNavigator();

export default class TabNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
        initialRouteName='Dashboard'
          screenOptions={({ route }) => ({ 
            tabBarLabel: ({focused, color}) => {
              return <View></View>; 
            },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              
              switch (route.name) {
                case "Data":
                  iconName = focused ? "bar-chart" : "bar-chart-outline"
                  break;
                
                case "Dashboard":
                  iconName = focused ? "compass" : "compass-outline"
                  break;
                
                case "Disasters":
                  iconName = focused ? "thunderstorm" : "thunderstorm-outline"
                  break;
              
                default:
                  break;
              }

              var c = focused ? color : "#00000055"
              
              return <Ionicons name={iconName} color={c} size={24} style={[styles.icons, focused ? {transform: [{scale: 1.5}]} : {}]} />;
            },
          })}
          tabBarOptions={{ activeTintColor: 'tomato', inactiveTintColor: 'gray' }}
          barStyle={styles.bottomTabStyle}>
          <Tab.Screen
            name="Data"
            component={DataStack}
            options={{ headerShown: false }}
            />
          <Tab.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{ headerShown: false }}
            />
          <Tab.Screen
            name="Disasters"
            component={DisasterStackNav}
            options={{ headerShown: false }}
            />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}