import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import styles from "../../../styles";

const url = "https://ttsfhack-raybackend.akze.repl.co/data";

export default class TemperatureDataScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [
        "22",
        "23",
        "24",
        "23",
        "24",
        "24",
        "23",
        "18",
        "16",
        "14",
        "14",
        "16",
        "13",
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.sav} />
        <Text style={[styles.screenTitle, {marginBottom: 0}]}>Temperature °C</Text>
        <Text style={[styles.labelText, {marginTop: 0, marginBottom: 30, fontStyle: "italic"}]}>Detected by nearby sensor</Text>
        <Text style={[styles.labelText, {marginTop: 0, marginBottom: 0}]}>Current:</Text>
        <Text style={[styles.labelText, {marginTop: 0, fontSize: 30, marginBottom: 30}]}>{this.state.data[this.state.data.length - 1]}°C</Text>
        <View style={styles.barGraph}>
            {this.state.data.map((value, index, array) => (
                <View style={[styles.barGraphBar, {height: parseFloat(value) * 8, alignSelf: "baseline", display: "flex", flexDirection: "column-reverse", backgroundColor: parseFloat(value) < 20 ? "red" : "black"}]}>
                    <Text style={{alignSelf: "center", color: "white", position: "absolute"}}>
                        {value}
                    </Text>
                </View>
            ))}
        </View>
        <View style={styles.barGraph}>
            {["-12s", "-11s", "-10s", "-9s", "-8s", "-7s", "-6s", "-5s", "-4s", "-3s", "-2s", "-1s", "0s"].map((value, index, array) => (
                <View style={[styles.barGraphBar, {height: 20, alignSelf: "baseline", display: "flex", flexDirection: "column-reverse", backgroundColor: "#00000000"}]}>
                    <Text style={{alignSelf: "center", color: "black", position: "absolute", fontSize: 9}}>
                        {value}
                    </Text>
                </View>
            ))}
        </View>
        <View style={{width: "90%", height: 5, borderRadius: 10, backgroundColor: "red", marginTop: 40, alignSelf: "center"}}></View>
        <View style={{display: "flex", flexDirection: "row", alignSelf: "center", justifyContent: "center", alignItems: "center"}}>
            <Ionicons name="warning" size={35} color="red" style={{margin: 0}}/>
            <Text style={[styles.labelText, {color: "red", fontSize: 35, margin: 0, marginLeft: 0, marginRight: 0, marginHorizontal: 0}]}>
                WARNING
            </Text>
            <Ionicons name="warning" size={35} color="red" style={{margin: 0}}/>
        </View>
        <Text style={[styles.labelText, {color: "red", fontSize: 25}]}>
            SUDDEN DROP IN TEMPERATURE
        </Text>
        <View style={{width: "90%", height: 5, borderRadius: 10, backgroundColor: "red", marginTop: 5, alignSelf: "center"}}></View>
      </View>
    );
  }
}
