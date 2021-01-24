import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import getEnvVars from "./environment.js";
const { dustApiUrl } = getEnvVars();


function Finedust(){
    const [mlocationm, setMlocation] = useState(null);
    const [mstation, setMstation] = useState("종로구");

    useEffect(()=> {
        (async () => {
            try {
                let result = await axios.get(`http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getNearbyMsrstnList?tmX=244148.546388&tmY=412423.75772&ServiceKey=vOFj8QWIbDJaRwHIDGBw7pQcsm5m2GdxPz4WY78DVxTRsmf7QJpat5SqxNrvBo3qKJLNDFvnIMZWoodNlEkV4w%3D%3D`);
                console.log(result);
            } catch {

            }
        })
    }, [mstation])

    return (
        <View>
            <Text>abcd</Text>
        </View>
    )
}

export default Finedust;