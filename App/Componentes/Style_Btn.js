import React from "react";
import { TouchableOpacity, View, StyleSheet,Text } from "react-native";

const Style_Btn =({onPress,text})=>{

    return(
        <TouchableOpacity 
            onPress={onPress}>
            <View style={styles.style_Btn}>
                <Text style={styles.Textt}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}



const styles=StyleSheet.create({
    style_Btn:{
    margin: 30,
    textAlign:'center',
    padding:10,
    backgroundColor:'#F39C12',
    borderRadius:20,
    },
    Textt:{
        color: 'white',
    }
})

export default Style_Btn;