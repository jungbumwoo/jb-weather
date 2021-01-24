import React, { useEffect, useState } from 'react';
import { Platform, Text, View, StyleSheet } from "react-native";

import * as Location from 'expo-location';
import axios from "axios";

import getEnvVars from "./environment.js"; // .gitignore
import Loading from './Loading.js';
import Weather from "./Weather";
import Finedust from './Finedust.js';
const { apiUrl } = getEnvVars(); // .gitignore


export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [mainWeather, setMainWeather] = useState("");
  const [temp, setTemp] = useState("");
  

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
        console.log("first useEffect Err");
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        console.log("*second useEffect()*");
      let { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiUrl}&units=metric`)
      let getWeather = "";
      getWeather = data.weather[0].main;
      setMainWeather(getWeather);
      let getTemp = "";
      getTemp = data.main.temp;
      setTemp(getTemp);
      } catch(error) {
        console.log("second useEffect Err");
        console.log(error);
      }
    })();
  }, [lat, lon]);

  if (mainWeather == "") {
    return (
      <Loading />
    )
  } else {
    return (
        <View>
          <Weather weather={mainWeather}
          temp={temp} />
        </View>
    );
  }
};

