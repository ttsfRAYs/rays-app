import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground
} from "react-native";
import styles from "../../styles";
const d = new Date();
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const apiKey = "0c7c6d57de44ea0e9bee7f3ed55c97e2";
// var locationKeyURL = ("http://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=metric" + "&appid=" + apiKey);
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";

export default class DashboardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Tracy",
      locationInput: "",
      icon: "01d",
      isLoading: true,
      data: {},
      fDeg: true,
    };
  }

  getWeatherData = () => {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=" +
          this.state.location +
          "&units=metric" +
          "&appid=" +
          apiKey
      )
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((err) => {
        this.setState({ validData: false });
      });
  };

  updateLocation = () => {
    this.setState({location: this.state.locationInput}, () => {
        this.getWeatherData();
    });
  }

  getPrefTemp = (temp) => {
    if (typeof temp !== typeof 0) {
      return "...";
    }
    return Math.round(this.state.fDeg ? (temp * 9) / 5 + 32 : temp);
  };

  componentDidMount() {
    this.getWeatherData();
  }

  render() {
    console.log("DATA", this.state.data);
    return (
      <KeyboardAvoidingView style={styles.homeContainer} behavior="height">
        <SafeAreaView style={styles.sav} />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.homeTitleContainer}>
            <Text style={styles.homeDateText}>
              Today,{" "}
              {
                [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ][new Date().getMonth()]
              }{" "}
              {new Date().getDate()}
            </Text>
            <Text style={styles.homeTitleText}>Welcome to RAYS</Text>
          </View>
          <Image
            source={{
              uri:
                "http://openweathermap.org/img/wn/" +
                (this.state.data ? (this.state.data.weather ? (this.state.data.weather[0] ? this.state.data.weather[0].icon : "01d") : "01d") : "01d") +
                "@4x.png",
            }}
            style={styles.homeWeatherImage}
          />
        </View>
        <TouchableOpacity
          style={styles.tempView}
          onPress={() => {
            this.setState({ fDeg: !this.state.fDeg });
          }}
        >
          <Text style={styles.tempText}>
            {this.getPrefTemp(
              this.state.data
                ? this.state.data.main
                  ? this.state.data.main.temp
                  : "..."
                : "..."
            )}
            °{this.state.fDeg ? "F" : "C"}
          </Text>
        </TouchableOpacity>
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.currentText}>
            {" "}
            {this.state.data
              ? this.state.data.weather
                ? this.state.data.weather[0]
                  ? this.state.data.weather[0].description
                  : "..."
                : "..."
              : "..."}
          </Text>
          <Text style={styles.dataText}>
            {" "}
            {this.state.data ? this.state.data.name : "Loading"}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextInput
              style={styles.input}
              placeholder="Location"
              value={this.state.locationInput}
              onChangeText={(locationInput) => this.setState({ locationInput })}
            />
            <TouchableOpacity onPress={this.updateLocation}>
              <Ionicons name="arrow-forward-circle" size={50} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 70,
              justifyContent: "center",
            }}
          >
            <View style={styles.dashboardBottomDataSeparator}>
              <Text style={styles.dataTextTitle}>Wind</Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Ionicons
                  name="arrow-up"
                  size={25}
                  style={{
                    transform: [
                      {
                        rotate:
                          (this.state.data
                            ? this.state.data.wind
                              ? this.state.data.wind.deg
                              : "0"
                            : "0") + "deg",
                      },
                    ],
                  }}
                />
                <Text style={styles.dataText}>
                  {this.state.data
                    ? this.state.data.wind
                      ? this.state.data.wind.speed
                      : "..."
                    : "..."}
                </Text>
              </View>
            </View>
            {/* <View style={{color:"gray",borderRadius:10, height: 50, width: 3, borderColor:"gray", borderWidth: 3, marginLeft: 20, marginRight: 20}}></View> */}
            <View style={styles.dashboardBottomDataSeparator}>
              <Text style={styles.dataTextTitle}>Humidity</Text>
              <Text style={styles.dataText}>
                {this.state.data
                  ? this.state.data.main
                    ? this.state.data.main.humidity
                    : "..."
                  : "..."}
              </Text>
            </View>
            {/* <View style={{color:"gray",borderRadius:10, height: 50, width: 3, borderColor:"gray", borderWidth: 3, marginLeft: 20, marginRight: 20}}></View> */}
            <View style={styles.dashboardBottomDataSeparator}>
              <Text style={styles.dataTextTitle}>Pressure</Text>
              <Text style={styles.dataText}>
                {this.state.data
                  ? this.state.data.main
                    ? this.state.data.main.pressure
                    : "..."
                  : "..."}
              </Text>
            </View>
          </View>
        </View>

      </KeyboardAvoidingView>
    );
  }
}
