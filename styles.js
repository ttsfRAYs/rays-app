import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  homeContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    paddingBottom: 100,
  },
  homeTitleContainer: {
    left: "5%",
  },
  homeDateText: {
    color: "gray",
    fontSize: RFValue(20),
    marginTop: RFValue(10),
  },
  homeTitleText: {
    color: "#000000",
    fontSize: RFValue(25),
    marginTop: RFValue(10),
    fontStyle: "bold",
  },
  screenTitle: {
    fontSize: 40,
    fontWeight: "bold",
    fontStyle: "italic",
    marginVertical: 20,
    alignSelf: "center",
  },
  dataScreenNavButton: {
    borderRadius: 50,
    borderColor: "#00000015",
    backgroundColor: "#00000015",
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    flex: 0.2,
    paddingHorizontal: 30,
    display: "flex",
    flexDirection: "row",
    marginVertical: 5,
    width: "90%",
  },
  dataScreenNavButtonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#555555",
    marginHorizontal: 10,
  },
  sav: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },
  bottomTabStyle: {
    backgroundColor: "#c1c7f7",
    borderRadius: 40,
    paddingTop: 20,
    marginBottom: 20,
    height: 84,
    width: "90%",
    left: "5%",
    alignSelf: "center",
    overflow: "hidden",
    position: "absolute",
  },
  icons: {},
  focusedBottomTabText: {
    fontSize: 20,
  },
  unfocusedBottomTabText: {},
  homeWeatherImage: {
    width: 100,
    height: 100,
    // position:"absolute",
    // right: 50
  },
  input: {
    marginVertical: 12,
    borderWidth: 3,
    borderColor: "#777777",
    borderRadius: 50,
    padding: 10,
    width: "70%",
    textAlign: "center",
    fontSize: 20,
    borderColor: "black",
    alignSelf: "center",
  },
  currentText: {
    color: "gray",
    fontSize: 40,
    alignSelf: "center",
    fontStyle: "italic",
    marginBottom: 5,
  },
  tempText: {
    color: "black",
    fontWeight: "bold",
    fontSize: RFValue(60),
    alignSelf: "center",
  },
  tempView: {
    width: RFValue(220),
    height: RFValue(220),
    backgroundColor: "white",
    borderColor: "black",
    // borderBottomColor: "grey",
    // borderWidth: 15,
    borderRadius: 1000,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 20,
    shadowOpacity: 0.5,
    justifyContent: "center",
    alignSelf: "center",
  },
  dataText: {
    color: "black",
    fontSize: 25,
    alignSelf: "center",
  },
  dataTextTitle: {
    color: "gray",
    fontSize: 15,
    alignSelf: "center",
  },
  dashboardBottomDataSeparator: {
    flex: 0.3,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "gray",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
  },
  title: {
    fontSize: 32,
  },
  usaColorButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 7,
    marginBottom: 10
  },
  usaColorButton: {
    flex: 1,
    height: 60,
    backgroundColor: "red",
    marginHorizontal: 5,
    borderRadius: 10,
  },
  labelText: {
    marginVertical: 10,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 40,
    fontSize: 20,
  },
  stateSelectButton: {
    backgroundColor: "#00000015",
    margin: 3,
    borderRadius: 5,
    padding: 5,
    paddingVertical: 20,
    flexGrow: 0.5,
    alignItems: "center",
    textAlign: "center"
  },
  stateSelectButtonText: {
    fontSize: 20,
    textAlign: "center"
  },
  disasterBlock: {
    alignSelf: "center",
    borderRadius: 20,
    backgroundColor: "#00000022",
    padding: 20,
    marginVertical: 10,
    width: "80%",
  },
  disasterBlockTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  disasterBlockDescription: {
    fontSize: 20,
  },
  barGraph: {
    width: "95%",
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
  },
  barGraphBar: {
    flex: 1,
    backgroundColor: "black",
    marginHorizontal: 1
  },  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },
});

export default styles;
