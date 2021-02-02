import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import getEnvVars from "./environment.js";
const { airKoreaApi, NAVER_CLIENT_ID ,NAVER_CLIENT_SECRET, OPENCASE_KEY } = getEnvVars();


function Finedust({ lat, lon}){
    const [pm10Value, setPm10Value] = useState(null);
    const [pm25Value, setPm25Value] = useState(null);
    const [pm10Grade, setPm10Grade] = useState(null);
    const [pm25Grade, setPm25Grade] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                //경도 위도로 받아온 좌표를 => 구, 읍면동으로
                let { data: { results }} = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${OPENCASE_KEY}&language=kr`); 
                
                // 이거 배열값 두개 이상이 나올 수도 있겠다. 주소에 따라서. 일단 내 주소는 하나만 떠서 [0]으로 넣어줬움
                // village = 동. 읍면동 넣으려는게 코더의 취지.
                let gu = results.[0].components.borough; // 구
                let village = results.[0].components.village;
                let inputLocation = "";
                if (village) {
                    inputLocation = village;
                } else {
                    inputLocation = gu;
                }
                // 해당 구, 읍면동 데이터를 tmX, tmY좌표로 변환
                let {data: {list}} = await axios.get(`http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getTMStdrCrdnt?umdName=${inputLocation}&pageNo=1&numOfRows=10&ServiceKey=${airKoreaApi}&_returnType=json`) 
                //37.37340751 127.13659424
                //212028 430175 
                let tmX = 37.572025;
                let tmY = 127.005028 // 내 집주소 경,위도와 종로구 tm좌표 수치가 같다. 내가 왕이 될 상인가?
                if (list == undefined) {
                    return <Text>현 위치에서는 미세먼지 데이터를 불러 올 수 없습니다.</Text>
                } else if (list.length == 1) {
                    tmX = list.[0].tmX;
                    tmY = list.[0].tmY;
                } else {
                    
                }
                // tm좌표 기준으로 거리가 가까운 순으로 측정소 리스트를  보여줌
                let near = await axios.get(`http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getNearbyMsrstnList?tmX=${tmX}&tmY=${tmY}&ServiceKey=${airKoreaApi}&_returnType=json`)
                // list[0] 이 가장 가까운 측정소
                let mstation = near.data.list[0].stationName;

                // 가장 가까운 측정소의 대기정보 데이터를 받아옴.
                let stationData = await axios.get(`http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=${mstation}&dataTerm=DAILY&pageNo=1&numOfRows=10&ServiceKey=${airKoreaApi}&ver=1.3&_returnType=json`)
                let airCondition = stationData.data.list[0];
                console.log(airCondition);
            } catch(err) {
                console.log("ERROR Findust.js ");
                console.log(err)
            };
        })();
    }, [])
    return (
        <View>
            <Text>abcd</Text>
        </View>
    )
}

export default Finedust;