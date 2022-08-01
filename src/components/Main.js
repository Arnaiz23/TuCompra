import Home from "../pages/Home"
import { Routes, Route } from "react-router-native"
import { View } from "react-native"
import { StatusBar } from "expo-status-bar"
import Option from "../pages/Option"
import Nav from "./Nav"

export default function Main() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/option" element={<Option />} />
      </Routes>
      <Nav />
    </View>
  )
}
