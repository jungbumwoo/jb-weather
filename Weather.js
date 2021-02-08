import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


function Weather({weather, wDescription, city, temp}) {
    console.log(weather);
    return(
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <LinearGradient style={styles.gradientBackground} colors={weatherList[weather].gradient}>
                <View style={styles.littleContainer}>
                    <MaterialCommunityIcons name={weatherList[weather].icon} size={120} color="white" />
                    <Text style={styles.titleWeather}>{weather}</Text>
                    <Text style={styles.descriptionWeater}>{wDescription}</Text>
                </View>
                <View style={styles.littleContainer}>
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
        flex: 7
    },
    gradientBackground: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    littleContainer: {
        flex:1,
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
    city: {
        color: "white",
        marginTop: 80
    },
    temp: {
        color: "white",
        fontSize: 28,
        fontWeight: "400",
        marginTop: 30
    }
});


const weatherList = {
    Thunderstorm: {
        description: "Clouds",
        icon: "weather-cloudy",
        gradient: ["#373B44", "#4286f4"]
    },
    Drizzle: {
        description: "Clouds",
        icon: "weather-cloudy",
        gradient: ["#373B44", "#4286f4"]
    },
    Snow: {
        description: "Clouds",
        icon: "weather-cloudy",
        gradient: ["#373B44", "#4286f4"]
    },
    Rain: {
        description: "Clouds",
        icon: "weather-cloudy",
        gradient: ["#373B44", "#4286f4"]
    },
    Mist: {
        description: "Mist",
        icon: "weather-fog",
        gradient: ["#373B44", "#4286f4"]
    },
    Smoke: {
        description: "Smoke",
        icon: "smog",
        gradient: ["#373B44", "#4286f4"]
    },
    Haze: {
        description: "Haze",
        icon: "weather-fog",
        gradient: ["#779D84", "#5486BB"]
    },
    Dust: {
        description: "Sand / dust whirls",
        icon: "smog",
        gradient: ["#373B44", "#4286f4"]
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
        gradient: ["#373B44", "#4286f4"]
    },
    Ash: {
        description: "Ash",
        icon: "smog",
        gradient: ["#373B44", "#4286f4"]
    },
    Squall:{
        description: "Squll",
        icon: "weather-windy",
        gradient: ["#373B44", "#4286f4"]
    },
    Tornado:{
        description: "Tornado",
        icon: "weather-tornado",
        gradient: ["#373B44", "#4286f4"]
    },
    Clear: {
        description: "Clear",
        icon: "weather-sunny",
        gradient: ["#373B44", "#4286f4"]
    },
    Clouds: {
        description: "Clouds",
        icon: "weather-cloudy",
        gradient: ["#373B44", "#4286f4"]
    }
}

export default Weather;