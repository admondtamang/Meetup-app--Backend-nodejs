import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Estylesheet from "react-native-extended-stylesheet";
// import Colors from "./constants/Colors";
import Root from "./src/Root";
// Estylesheet.build(Colors);
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    );
  }
}
