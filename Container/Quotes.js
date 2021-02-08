import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from "react-native";

/**
* @author
* @function Quotes
**/

const Quotes = (props) => {
    const [ author, setAuthor ] = useState('');
    const [ sentense, setSentense ] = useState('');

    useEffect(() => {
        (async () => {
            try {
                let { data } = await axios.get('https://type.fit/api/quotes');
                let oneQuote = data.splice(Math.floor(Math.random() * data.length),1);
                setAuthor(oneQuote[0].author);
                setSentense(oneQuote[0].text);
            } catch(error) {
                console.log(error);
            }
        })();
    }, [])

    return(
        <View style={styles.container}>
            <Text>{sentense}</Text>
            <Text>{author}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 3
    }
});


export default Quotes