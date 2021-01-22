import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


function Weather({weather, temp}) {
    return(
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <LinearGradient style={styles.gradientBackground} colors={weatherList[weather].colors}>
                <View style={styles.littleContainer}>
                    <MaterialCommunityIcons name={weatherList[weather].icon} size={120} color="white" />
                    <Text style={styles.titleWeather}>{weather}</Text>
                </View>
                <View style={styles.littleContainer}>
                    <Text style={styles.temp}>{temp}°C</Text>
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
        flex:1,
        backgroundColor: "blue"
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
    temp: {
        color: "white",
        fontSize: 28,
        fontWeight: "400"
    }
});


let weatherList = {
    Mist: {
        description: "Mist",
        icon: "weather-fog",
        colors: ["#7B7470", "#748684"]
    },
    Smoke: {
        description: "Smoke",
        icon: "smog",
        colors: ["#7B7470", "#748684"]
    },
    Haze: {
        description: "Haze",
        icon: "weather-fog",
        colors: ["#7B7470", "#748684"]
    },
    Dust: {
        description: "Sand / dust whirls",
        icon: "smog",
        colors: ["#5D5D5D", "#DDBA4F"]
    },
    Fog: {
        description: "Fog",
        icon: "weather-fog",
        colors: ["#7B7470", "#748684"]
    },
    Sand: {
        description: "Sand",
        icon: "smog",
        colors: ["#7B7470", "#748684"]
    },
    Dust: {
        description: "Dust",
        icon: "smog",
        colors: ["#7B7470", "#748684"]
    },
    Ash: {
        description: "Ash",
        icon: "smog",
        colors: ["#7B7470", "#748684"]
    },
    Squall:{
        description: "Squll",
        icon: "weather-windy",
        colors: ["#7B7470", "#748684"]
    },
    Tornado:{
        description: "Tornado",
        icon: "weather-tornado",
        colors: ["#7B7470", "#748684"]
    }
}

export default Weather;