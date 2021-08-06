import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native";
import Countries from "../firstapp/assets/components/Countries.tsx";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Countries />
      </ScrollView>
      <StatusBar style="dark" />
    </View>
  );
}
