import React, { useEffect, useState } from 'react';
import { Platform, Text, View, StyleSheet } from "react-native";

import * as Location from 'expo-location';
import axios from "axios";

import getEnvVars from "./environment.js"; // .gitignore
import Loading from './Loading.js';
import Weather from "./Weather";
import Finedust from './Finedust.js';

const { OPENWEATHER_API } = getEnvVars(); // .gitignore


export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [city, setCity] = useState("");
  const [mainWeather, setMainWeather] = useState("");
  const [wDescription, setWDescription ] = useState("");
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
      let { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=${OPENWEATHER_API}&units=metric`)
      let getWeather = "";
      let getDescription = "";
      let getCity = "";
      getWeather = data.weather[0].main;
      getDescription = data.weather[0].description;
      getCity = data.name;
      setMainWeather(getWeather);
      setWDescription(getDescription);
      setCity(getCity);
      let getTemp = "";
      getTemp = data.main.temp;
      setTemp(getTemp);
      } catch(error) {
        console.log("second useEffect Err at App.js");
      }
    })();
  }, [lat, lon]);

  if (mainWeather == "") {
    return (
      <Loading />
    )
  } else {
    return (
      <View style={styles.container}>
        <Weather weather={mainWeather}
          wDescription={wDescription}
          city={city}
          temp={temp}
          lat={lat}
          lon={lon}
          />
      </View>
       
    );
  }
};

const styles = StyleSheet.create({
  container:{
      flex: 1
  }
});
