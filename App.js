import React, { useEffect, useState } from 'react';
import { Platform, Text, View, StyleSheet } from "react-native";

import * as Location from 'expo-location';
import axios from "axios";

import getEnvVars from "./environment.js"; // .gitignore
import Loading from './Loading.js';
const { apiUrl } = getEnvVars(); // .gitignore
/*
import Loading from "./Loading";
*/
export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mainWeather, setMainWeather] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  useEffect(() => {
    (async () => {
      try {
        console.log("* first useEffect() *")
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        setLat(location.coords.latitude);
        setLon(location.coords.longitude);
      } catch(err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        console.log("*second useEffect()*");
      let { data: { weather }} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiUrl}&units=metric`)
      let getWeather = "";
      getWeather = weather.[0].main
      setMainWeather(getWeather);
      } catch(error) {
        console.log(error);
      }
    })();
    
  }, [location]);

  /*  */
  /*
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  

  let _mainWeather = "";
  _mainWeather = mainWeather;
  console.log("mainWeather");
  console.log(_mainWeather);
  */
  if (mainWeather == undefined) {
    return (
      <Loading />
    )
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{mainWeather}</Text>
      </View>
    );
  }
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

/*
useEffect(() => {
    (async () => {
      try {
        console.log("*second useEffect()*");
      let resultAxios = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiUrl}&units=metric`)
        .then(function (response) {
          console.log("response");
          console.log(response);
          const { data : { weather }} = response;
          console.log("main weather!!:");
          console.log(response.data.weather.[0].main);
        })
        .catch(function (error) {
          console.log("OMG error at axios");
          console.log(error);
        })
        setMainWeather(response.data.weather.[0].main);
      } catch(error) {
        console.log(error);
      }
    })();
    
  }, [location]);
*/