import React, { useEffect, useState } from 'react';
import { Platform, Text, View, StyleSheet } from "react-native";
import Loading from "./Loading";
import * as Location from 'expo-location';

const API_KEY = "";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100
  },
  paragraph: {
    flex: 1,
    backgroundColor: "yellow"
  }
})

