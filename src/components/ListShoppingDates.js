import { View, Text, StyleSheet } from "react-native"
import theme from "../theme"

export default function ListShoppingDates(item) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>Check: {item.check ? "YES" : "NO"}</Text>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    width: 300,
    justifyContent: "space-evenly",
  },
  text: {
    color: theme.text.primaryText,
  },
})
