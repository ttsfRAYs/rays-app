import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from '../../../styles';

export default class DataMainScreen extends React.Component {
    render() {
        return (

            <View style={[styles.container, {alignItems: 'center'}]}>
                <SafeAreaView style={styles.sav}/>
                <Text style={styles.screenTitle}>
                    Data
                </Text>
                <Text>
                    Data detected by sensors near you.
                </Text>
                <TouchableOpacity style={[styles.dataScreenNavButton, {borderColor: "#570000", backgroundColor: "#f7d5d5"}]} onPress={() => {this.props.navigation.navigate("TemperatureData")}}>
                    <Ionicons name="thermometer-outline" size={30} color="#570000" />
                    <Text style={[styles.dataScreenNavButtonText, {color: "#570000"}]}>
                        Temperature
                    </Text>
                    <Ionicons name="arrow-forward" size={30} color="##570000" />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.dataScreenNavButton, {borderColor: "#0e0057", backgroundColor: "#e2dff5"}]} onPress={() => {this.props.navigation.navigate("WaterData")}}>
                    <Ionicons name="water-outline" size={30} color="#0e0057" />
                    <Text style={[styles.dataScreenNavButtonText, {color: "#0e0057"}]}>
                        Water Level
                    </Text>
                    <Ionicons name="arrow-forward" size={30} color="#0e0057" />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.dataScreenNavButton, {borderColor: "#1d5700", backgroundColor: "#e7f7df"}]} onPress={() => {this.props.navigation.navigate("QuakeData")}}>
                    <Ionicons name="earth-outline" size={30} color="#1d5700" />
                    <Text style={[styles.dataScreenNavButtonText, {color: "#1d5700"}]}>
                        Earthquake
                    </Text>
                    <Ionicons name="arrow-forward" size={30} color="#1d5700" />
                </TouchableOpacity>

            </View>
        )
    }
}
