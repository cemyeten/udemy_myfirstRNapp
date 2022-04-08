import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { SetName } from "../redux/action";

export default HomeScreen = () => {
    const navigation = useNavigation();
    const dispacth = useDispatch();
    const { GeneralResponse } = useSelector(state => state);
    return (
        <View style={{ flex: 1, backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome Home Screen</Text>
            <Text>Name: {GeneralResponse.name} Age: {GeneralResponse.age}</Text>
            <TextInput 
            style={{
                width:200,
                height:50,
                borderColor: 'white',
                borderWidth:1,
                padding:6,
                margin:16,
            }}
                placeholder="What is your name?"
                value={GeneralResponse.name}
                onChangeText={(text) => dispacth(SetName(text))}
            />

            <Button title="Go to Details" onPress={() => navigation.navigate("Details")} />
        </View>
    )
};

