import React from "react";
import { View, Text, StyleSheet } from "react-native";
import data from "../assets/data.json";

const Name = () => {
    return (
        <View >
            <Text >dummy names</Text>
            <FileList
                data={data}
                renderItem={({ item }) => (
                    return(
                        <View>
                            <Text>{item.name}</Text>
                            <Text>{item.bio}</Text>
                        </View>
                    );
                )}
                keyExtractor={(item) => item.id.toString()}></FileList>
        </View>
    );
}