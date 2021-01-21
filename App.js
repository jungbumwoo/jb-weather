import React, { useEffect, useState } from 'react';
import { Platform, Text, View, StyleSheet } from "react-native";

import * as Location from 'expo-location';
import axios from "axios";

import getEnvVars from "./environment.js"; // .gitignore
const { apiUrl } = getEnvVars();

/*
import Loading from "./Loading";
*/

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mainWeather, setMainWeather] = useState(null);
  const [results, setResults] = useState(null);

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

  useEffect(() => {
    if (location) {
      let lat = location.coords.latitude;
      let lon = location.coords.longitude;
      (async () => {
        let resultAxios = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiUrl}`)
          .then(function (response) {
            const { data : { weather }} = response;
            console.log("main weather!!:");
            console.log(response.data.weather.[0].main);
          })
          .catch(function (error) {
            console.log("OMG error at axios");
            console.log(error);
          })
      })();
    }
    let getWeather = [];
    if (results) {
      getWeather = response.data.weather.[0].main;
    } else {
      console.log("response is not exist");
    }
    setMainWeather(getWeather);
  }, [location]);

  /*  */

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  
  let _mainWeather = [];
  _mainWeather = mainWeather;

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
      <Text style={styles.paragraph}>{_mainWeather}</Text>
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

