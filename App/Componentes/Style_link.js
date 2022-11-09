import React from "react";
import { TouchableOpacity, View, StyleSheet,Text } from "react-native";

const Style_link =({onPress,text})=>{

    return(
        <TouchableOpacity 
            onPress={onPress}>
            <View style={styles.Fondo}>
                <Text style={styles.Textt}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}



const styles=StyleSheet.create({
    Fondo:{
        margin:15,
        textAlign:'center',
    },
    Textt:{
        color: 'white',
    }
})

export default Style_link;