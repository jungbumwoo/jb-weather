import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Quotes from './Container/Quotes.js';
import Finedust from "./Finedust";


function Weather({weather, wDescription, city, temp, lat, lon}) {
    return(
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <LinearGradient style={styles.gradientBackground} colors={weatherList[weather].gradient}>
                <View style={styles.littleContainer}>
                    <MaterialCommunityIcons name={weatherList[weather].icon} size={120} color="white" />
                    <Text style={styles.titleWeather}>{weather}</Text>
                    <Text style={styles.descriptionWeater}>{wDescription}</Text>
                </View>
                <View style={{flex: 2}}>
                    <Quotes />
                </View>
                <View style={{flex: 1.5}}>
                    <Finedust lat={lat} lon={lon} gradientColor={weatherList[weather].gradient} />
                </View>
                <View style={[styles.littleContainer, {flex: 2}]}>
                    <Text style={styles.temp}>{temp}°C</Text>
                    <Text style={styles.city}>{city}</Text>
                </View>
            </LinearGradient>
        </View>
    );
};

Weather.propTypes = {
    weather: PropTypes.string.isRequired,
    temp: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ]),
};

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    gradientBackground: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    littleContainer: {
        flex:3,
        alignItems: "center",
        justifyContent: "center"
    },
    titleWeather: {
        color: "white",
        fontSize: 34,
        fontWeight: "500",
        marginTop: 10
    },
    descriptionWeater: {
        color: "white",
        fontSize: 12,
        fontWeight: "300",
        marginTop: 15
    },
    temp: {
        color: "white",
        fontSize: 28,
        fontWeight: "400",
    },
    city: {
        color: "white",
        marginTop: 30
    },
});


const weatherList = {
    Thunderstorm: {
        description: "Clouds",
        icon: "weather-cloudy",
        gradient: ["#E1E29B", "#0A3CF5"]
    },
    // 이슬비 
    Drizzle: {
        description: "Clouds",
        icon: "weather-cloudy",
        gradient: ["#94AACA", "#7A9FC0"]
    },
    Snow: {
        description: "Clouds",
        icon: "weather-cloudy",
        gradient: ["#EFF8F6", "#9CA9DA"]
    },
    Rain: {
        description: "Clouds",
        icon: "weather-cloudy",
        gradient: ["#0E3873", "#7AB0C0"]
    },
    Mist: {
        description: "Mist",
        icon: "weather-fog",
        gradient: ["#568B8A", "#C0C0C0"]
    },
    Smoke: {
        description: "Smoke",
        icon: "smog",
        gradient: ["#C4C4C4", "#385B66"]
    },
    Haze: {
        description: "Haze",
        icon: "weather-fog",
        gradient: ["#A0BABA", "#A29171"]
    },
    Fog: {
        description: "Fog",
        icon: "weather-fog",
        gradient: ["#373B44", "#4286f4"]
    },
    Sand: {
        description: "Sand",
        icon: "smog",
        gradient: ["#373B44", "#4286f4"]
    },
    Dust: {
        description: "Dust",
        icon: "smog",
        gradient: ["#7CC3C3", "#A29171"]
    },
    Ash: {
        description: "Ash",
        icon: "smog",
        gradient: ["#373B44", "#4286f4"]
    },
    Squall:{
        description: "Squll",
        icon: "weather-windy",
        gradient: ["#FFDAC8", "#4265E5"]
    },
    Tornado:{
        description: "Tornado",
        icon: "weather-tornado",
        gradient: ["#451661", "#01536D"]
    },
    Clear: {
        description: "Clear",
        icon: "weather-sunny",
        //gradient: ['rgba(154, 158, 116, 1.0)', 'rgba(27, 158, 230, 1.0)']
        gradient: ['#5F91EC', '#A5D8A8']
    },
    Clouds: {
        description: "Clouds",
        icon: "weather-cloudy",
        gradient: ["#B6B8AC", "#98A8E0"]
    }
}

export default Weather;

