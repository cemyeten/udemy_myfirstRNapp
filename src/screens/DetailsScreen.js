import React from "react";
import { View,Text,Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export default DetailsScreen = () =>{
    const navigation = useNavigation();
    const { GeneralResponse } = useSelector(state => state);
    return(
        <View style={{flex:1,backgroundColor:'orange',alignItems:'center',justifyContent:'center'}}>
         <Text>Welcome Details Screen</Text>
         <Text>Name: {GeneralResponse.name} Age: {GeneralResponse.age}</Text>
         <Button title="Go Back" onPress={()=>navigation.goBack()}/>
        </View>
    )
};

