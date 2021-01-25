import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import getEnvVars from "./environment.js";
const { airKoreaApi, SGIS_ID, SGIS_SECRET } = getEnvVars();


function Finedust({ lat, lon}){
    const [mlocationm, setMlocation] = useState(null);
    const [mstation, setMstation] = useState("종로구");
    const [sgisToken, setSgisToken ] = useState("");
    const [tm_x, setTm_x] = useState(null);
    const [tm_y, setTm_y] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const { data: { result : { accessToken}}}= await axios.get(`https://sgisapi.kostat.go.kr/OpenAPI3/auth/authentication.json?consumer_key=${SGIS_ID}&consumer_secret=${SGIS_SECRET}`);
                console.log("accessToken");
                console.log(accessToken);
                const { data: { result }} = await axios.get(`https://sgisapi.kostat.go.kr/OpenAPI3/transformation/transcoord.json?accessToken=${accessToken}&src=4326&dst=5181&posX=${lat}&posY=${lon}`);
                console.log(result);
                setTm_x(result.posX);
                setTm_y(result.posY);
                let posX = result.posX;
                let posY = result.posY;
                const getget = await axios.get(`http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getNearbyMsrstnList?ServiceKey=${airKoreaApi}&tmX=${posX}&tmY=${posY}`);
                console.log(getget);
            } catch(err) {
                console.log("sgis token err");
            };
        })();
    }, [])
    /* 
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
        })();
    },[])
    */
    return (
        <View>
            <Text>abcd</Text>
        </View>
    )
}

export default Finedust;