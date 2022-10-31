import * as React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "./component/header";
import Card from "./component/card";
import { NativeRouter } from "react-router-native";

export default function App() {
  return (
    <NativeRouter>
      <View>
        <Header />
        <ScrollView style={styles.body}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  body: {
    marginBottom: 80,
  },
});
