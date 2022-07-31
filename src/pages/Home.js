import { Text, View, StyleSheet, Dimensions, FlatList } from "react-native"
import ListShoppingDates from "../components/ListShoppingDates"
import theme from "../theme"

const DATA = [
  {
    check: true,
    name: "OP",
  },
  {
    check: true,
    name: "OP",
  },
  {
    check: true,
    name: "OP",
  },
  {
    check: true,
    name: "OP",
  },
  {
    check: false,
    name: "OP",
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.initialText}>Home</Text>
      <View style={styles.containerOptions}>
        {/* List of the all shoppingsCarts */}
        <FlatList
          data={DATA}
          renderItem={({ item }) => <ListShoppingDates {...item} />}
          ItemSeparatorComponent={() => <Text></Text>}
        ></FlatList>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    backgroundColor: theme.application.backgroundColor,
    width: Dimensions.get("screen").width,
    padding: 20,
    paddingTop: 90,
  },
  containerOptions: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 20,
    padding: 30,
  },
  initialText: {
    fontSize: theme.titles.size,
    textAlign: "center",
    paddingBottom: 20,
    color: theme.text.primaryText,
    fontWeight: "bold",
  },
})
