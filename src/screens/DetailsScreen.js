import React from "react";
import { View,Text,Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default DetailsScreen = () =>{
    const navigation = useNavigation();
    return(
        <View style={{flex:1,backgroundColor:'dodgerblue',alignItems:'center',justifyContent:'center'}}>
         <Text>Welcome Details Screen</Text>
         <Button title="Go Back" onPress={()=>navigation.goBack()}/>
        </View>
    )
};

