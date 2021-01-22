import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

function Weather({weather, temp}) {
    return(
        <View style={styles.container}>
            <Text style={styles.paragraph}>{weather}</Text>
            <Text style={styles.paragraph}>{temp}</Text>
        </View>
    )
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

export default Weather;