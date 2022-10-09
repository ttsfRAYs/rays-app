import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import styles from '../../../styles';

export default class QuakeDataScreen extends React.Component {
    constructor() {
        super();
    
        this.state = {
          data: [
            0,
            0,
            0,
            0,
            1,
            1,
            3,
            6,
            9,
            8,
            7,
            9,
          ]
        };
      }
    
    render() {
        return (
            <View style={styles.container}>
              <SafeAreaView style={styles.sav} />
              <Text style={[styles.screenTitle, {marginBottom: 0, fontSize: 30}]}>Earthquake Richter Scale</Text>
              <Text style={[styles.labelText, {marginTop: 0, marginBottom: 30, fontStyle: "italic"}]}>Detected by nearby sensor</Text>
              <Text style={[styles.labelText, {marginTop: 0, marginBottom: 0}]}>Current:</Text>
              <Text style={[styles.labelText, {marginTop: 0, fontSize: 30, marginBottom: 30}]}>{["1: None", "2: Safe", "3: Tiny", "4: Minor", "5: Light", "6: Moderate", "7: Strong", "8: Major", "9: Severe"][this.state.data[this.state.data.length - 1]]}</Text>
              <View style={styles.barGraph}>
                  {this.state.data.map((value, index, array) => (
                      <View style={[styles.barGraphBar, {height: parseFloat(value) * 20, alignSelf: "baseline", display: "flex", flexDirection: "column-reverse", backgroundColor: parseFloat(value) < 20 ? "red" : "black"}]}>
                          <Text style={{alignSelf: "center", color: value >= 1 ? "white" : "black", position: "absolute", fontSize: 16, fontWeight: 'bold'}}>
                              {value == 0 ? "LO" : "HI"}
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
                  POTENTIAL SEVERE EARTHQUAKE
              </Text>
              <View style={{width: "90%", height: 5, borderRadius: 10, backgroundColor: "red", marginTop: 5, alignSelf: "center"}}></View>
            </View>
          );
    }
}
