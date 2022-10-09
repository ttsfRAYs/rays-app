import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import styles from "../../../styles";

const statesToColor = {
  Alabama: "blue",
  Alaska: "red",
  Arizona: "yellow",
  Arkansas: "blue",
  California: "red",
  Colorado: "yellow",
  Connecticut: "pink",
  Delaware: "purple",
  Florida: "blue",
  Georgia: "blue",
  Hawaii: "red",
  Idaho: "yellow",
  Illinois: "green",
  Indiana: "green",
  Iowa: "green",
  Kansas: "green",
  Kentucky: "blue",
  Louisiana: "blue",
  Maine: "pink",
  Maryland: "purple",
  Massachusetts: "pink",
  Michigan: "green",
  Minnesota: "green",
  Mississippi: "blue",
  Missouri: "green",
  Montana: "yellow",
  Nebraska: "green",
  Nevada: "yellow",
  "New Hampshire": "pink",
  "New Jersey": "purple",
  "New Mexico": "yellow",
  "New York": "purple",
  "North Carolina": "blue",
  "North Dakota": "green",
  Ohio: "green",
  Oklahoma: "blue",
  Oregon: "red",
  Pennsylvania: "purple",
  "Rhode Island": "pink",
  "South Carolina": "blue",
  "South Dakota": "green",
  Tennessee: "blue",
  Texas: "blue",
  Utah: "yellow",
  Vermont: "pink",
  Virginia: "blue",
  Washington: "red",
  "West Virginia": "blue",
  Wisconsin: "green",
  Wyoming: "yellow",
};

const palette = {
  "red": "#FF7F7F",
  "yellow": "#FAFF7F",
  "green": "#B4FF7F",
  "blue": "#7FCFFF",
  "purple": "#B97FFF",
  "pink": "#FF7FD7",
}

export default class DisasterScreen extends React.Component {
  goToInfo = (color) => {
    console.log("go to info", color);
    this.props.navigation.navigate("InfoScreen", {"regionColor": color});
  };

  goToInfoWithState = (state) => {
    console.log("go to info with state", state);
    this.goToInfo(statesToColor[state]);
  };

  render() {
    return (
      <View style={[styles.container, { alignItems: "center" }]}>
        <SafeAreaView style={styles.sav} />
        <Text style={[styles.labelText, {marginBottom: 0, fontStyle: "italic", fontSize: 16}]}>
          HOW TO PREPARE FOR
        </Text>
        <Text style={[styles.screenTitle, {marginTop: 0}]}>Disasters</Text>
        <Text style={styles.labelText}>
          Select the color of your region with the squares below the map:
        </Text>
        <Image
          style={{ width: "90%", height: 200, resizeMode: "contain" }}
          source={require("../../../assets/usa_color_coded.png")}
        />
        <View style={styles.usaColorButtonContainer}>
          <TouchableOpacity
            style={[styles.usaColorButton, { backgroundColor: "#FF7F7F" }]}
            onPress={() => {
              this.goToInfo("red");
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[styles.usaColorButton, { backgroundColor: "#FAFF7F" }]}
            onPress={() => {
              this.goToInfo("yellow");
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[styles.usaColorButton, { backgroundColor: "#B4FF7F" }]}
            onPress={() => {
              this.goToInfo("green");
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[styles.usaColorButton, { backgroundColor: "#7FCFFF" }]}
            onPress={() => {
              this.goToInfo("blue");
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[styles.usaColorButton, { backgroundColor: "#B97FFF" }]}
            onPress={() => {
              this.goToInfo("purple");
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[styles.usaColorButton, { backgroundColor: "#FF7FD7" }]}
            onPress={() => {
              this.goToInfo("pink");
            }}
          ></TouchableOpacity>
        </View>
        <Text style={styles.labelText}>...or select your state below:</Text>
        <ScrollView
          style={{
            borderRadius: 5
          }}
          contentContainerStyle={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            paddingBottom: 110,
            borderRadius: 5
          }}
        >
          {[
            "Alabama",
            "Alaska",
            "Arizona",
            "Arkansas",
            "California",
            "Colorado",
            "Connecticut",
            "Delaware",
            "Florida",
            "Georgia",
            "Hawaii",
            "Idaho",
            "Illinois",
            "Indiana",
            "Iowa",
            "Kansas",
            "Kentucky",
            "Louisiana",
            "Maine",
            "Maryland",
            "Massachusetts",
            "Michigan",
            "Minnesota",
            "Mississippi",
            "Missouri",
            "Montana",
            "Nebraska",
            "Nevada",
            "New Hampshire",
            "New Jersey",
            "New Mexico",
            "New York",
            "North Carolina",
            "North Dakota",
            "Ohio",
            "Oklahoma",
            "Oregon",
            "Pennsylvania",
            "Rhode Island",
            "South Carolina",
            "South Dakota",
            "Tennessee",
            "Texas",
            "Utah",
            "Vermont",
            "Virginia",
            "Washington",
            "West Virginia",
            "Wisconsin",
            "Wyoming",
          ].map((value, index, array) => (
            <TouchableOpacity
              style={[styles.stateSelectButton, {backgroundColor: palette[statesToColor[value]]}]}
              onPress={() => {this.goToInfoWithState(value)}}
            >
              <Text style={styles.stateSelectButtonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}
