import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import getEnvVars from "./environment.js";
const { airKoreaApi, KAKAO_RESTAPI_KEY } = getEnvVars();


function Finedust({ lat, lon}){
    const [mlocationm, setMlocation] = useState(null);
    const [mstation, setMstation] = useState("종로구");
    const [sgisToken, setSgisToken ] = useState("");
    const [tm_x, setTm_x] = useState(null);
    const [tm_y, setTm_y] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                let result = await axios.get(`http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getTMStdrCrdnt?umdName=혜화동&pageNo=1&numOfRows=10&ServiceKey=${airKoreaApi}`, {
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                })
                console.log(result);
                //37.37340751 127.13659424
                //212028 430175 이런식으로 나와야함.. 
                /*
                setTm_x(result.posX);
                setTm_y(result.posY);
                let pos_X = result.posX;
                let pos_Y = result.posY;
                const { data: { list }} = await axios.get(`http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getNearbyMsrstnList?ServiceKey=${airKoreaApi}&tmX=${pos_X}&tmY=${pos_Y}&_returnType=json`);
                console.log(list[0]);
                */
            } catch(err) {
                console.log("ERROR Findust.js ");
                console.log(err)
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