import React from "react";  
import { View, Text, StyleSheet } from "react-native";

const FlexExample = () => {
    return (
        <View style={{flex:1, flexDirection:"row"}}>
            <View style={{width:50,height:50, backgroundColor:"red"}}></View>
            <View style={{width:50,height:50, backgroundColor:"green"}}></View>
            <View style={{width:50,height:50, backgroundColor:"blue"}}></View>
            
        </View>
    );
}