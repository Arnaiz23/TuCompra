import Home from "../pages/Home"
import { Routes, Route } from "react-router-native"
import { View } from "react-native"
import { StatusBar } from "expo-status-bar"

export default function Main() {
  return (
    <View>
      <StatusBar style="light" />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </View>
  )
}
