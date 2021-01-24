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
                let {data} = axios.get(`http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=서울&pageNo=1&numOfRows=10&ServiceKey=서비스키&ver=1.3`);
            } catch {

            }
        })
    }, [mstation])

    return (
        <View>

        </View>
    )
}

export default Finedust;