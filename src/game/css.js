import { StyleSheet } from "react-native";

const gameStyles = StyleSheet.create({
  game: {
    flex: 1,
    flexDirection: "row",
    padding:40
  },
  gameInfo: {
    marginLeft: 20,
  },
  square: {
    //   flex:1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#999",
    fontSize: 44,
    fontWeight: "bold",
    lineHeight: 54,
    height: 54,
    // marginRight: -1,
    // marginTop: -1,
    padding: 0,
    textAlign: "center",
    alignItems: "center",
    width: 54,
  },
 
});

export default gameStyles;
