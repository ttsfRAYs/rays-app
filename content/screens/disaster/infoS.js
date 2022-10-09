import React from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList,Image, TouchableOpacity,TextInput, ScrollView } from "react-native";
import styles from "../../../styles";

var stateInfo = require("../data.json");

function getStatesOfColor(color) {
  var states = [];

  for (var i in stateInfo.states) {
    if (stateInfo.states[i] == color) states.push(i);
  }

  return states;
}

const palette = {
  "red": "#FF7F7F",
  "yellow": "#FAFF7F",
  "green": "#B4FF7F",
  "blue": "#7FCFFF",
  "purple": "#B97FFF",
  "pink": "#FF7FD7",
}

const imgs = {
  "Earthquakes": require("../../../assets/disasterIcons/earthquake.png"),
  "Wildfires": require("../../../assets/disasterIcons/wildfire.png"),
  "Hurricanes": require("../../../assets/disasterIcons/hurricane.png"),
  "Volcanoes": require("../../../assets/disasterIcons/volcano.png"),
  "Tsunami": require("../../../assets/disasterIcons/tsunami.png"),
  "Landslides": require("../../../assets/disasterIcons/landslide.png"),
  "Winter Storms": require("../../../assets/disasterIcons/winterstorm.png"),
  "Tornadoes": require("../../../assets/disasterIcons/tornado.png"),
};

export default class DisasterScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      regionColor: ""
    }
  }

  componentDidMount() {
    this.setState({regionColor: this.props.route.params.regionColor});
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.sav} />
        <Text style={styles.screenTitle}>Disasters</Text>
        <View style={{paddingHorizontal: 15}}>
          <View style={{width: "100%", height: 4, borderRadius: 10, backgroundColor: palette[this.state.regionColor]}}></View>
        </View>
        <Text style={[styles.labelText, {fontStyle: "italic", fontSize: 18}]}>{getStatesOfColor(this.state.regionColor).join(", ")}</Text>
        <View style={{paddingHorizontal: 15}}>
          <View style={{width: "100%", height: 4, borderRadius: 10, backgroundColor: palette[this.state.regionColor]}}></View>
        </View>
        <ScrollView style={{marginTop: 20}} contentContainerStyle={{paddingBottom: 100}}>
          {(() => {
            var r = [];
            for (var i in stateInfo.colors[this.state.regionColor]) {
              r.push(
                <View style={styles.disasterBlock}>
                  <View style={{display: "flex", flexDirection: "row", alignItems: "center", alignContent: "center"}}>
                    <Text style={styles.disasterBlockTitle}>
                      {i}
                    </Text>
                    <Image source={imgs[i]} style={{resizeMode: "contain", width: 60, height: 60, marginTop: -12}}/>
                  </View>
                  <Text style={styles.disasterBlockDescription}>
                    {stateInfo.colors[this.state.regionColor][i]}
                  </Text>
                </View>
              )
            }
            return r;
          })()}
        </ScrollView>
      </View>
    );
  }
}
