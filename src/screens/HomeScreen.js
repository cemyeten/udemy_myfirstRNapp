import React from "react";
import { View,Text,Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default HomeScreen = () =>{
    const navigation = useNavigation();
    return(
        <View style={{flex:1,backgroundColor:'cyan',alignItems:'center',justifyContent:'center'}}>
         <Text>Welcome Home Screen</Text>
         <Button title="Go to Details" onPress={()=>navigation.navigate("Details")}/>
        </View>
    )
};

