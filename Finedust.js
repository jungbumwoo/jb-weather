import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import getEnvVars from "./environment.js";
const { airKoreaApi } = getEnvVars();


function Finedust(){
    const [mlocationm, setMlocation] = useState(null);
    const [mstation, setMstation] = useState("종로구");

    useEffect(()=> {
        console.log("FineDust useEffect");
        (async () => {
            // Why FineDust async Function doesn't work?
            console.log("Why FineDust async Function doesn't work?");
            try {
                let result = await axios.get(`http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getNearbyMsrstnList?tmX=244148.546388&tmY=412423.75772&ServiceKey=${airKoreaApi}`);
                console.log("fineDust results");
                console.log(result);
            } catch(err) {
                console.log("Finedust async err");
                console.log(err);
            }
        })
    })

    return (
        <View>
            <Text>abcd</Text>
        </View>
    )
}

export default Finedust;