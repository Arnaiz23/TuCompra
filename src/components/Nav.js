import { View, StyleSheet, Dimensions } from "react-native"
import { Link } from "react-router-native"
import IconHome from "./Icons/IconHome"

export default function Nav() {
  return (
    <View style={styles.container}>
      <Link to="/">
        <IconHome fill="#fff" />
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    height: 60,
    width: Dimensions.get("window").width,
    backgroundColor: "#aaa",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
})
