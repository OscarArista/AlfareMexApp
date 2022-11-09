import React from "react";
import { Text, StyleSheet, View, Image, TextInput, ScrollView, Button} from "react-native";
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

const Home_Admin = ({navigation}) =>{

        return (
            <ScrollView style={styles.Container}>
                <View>  
                    <Text style={styles.Title}>Bienvenido</Text>

                </View>

                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <View>
                        <Text style={{color:'orange', paddingEnd:25}} 
                        >
                            <MaterialCommunity name="arrow-left-circle" size={40}
                            onPress={()=>{
                                navigation.navigate('LoginScreen')
                            }}/>
                        </Text>
                    </View>

                    <View style={styles.btn}>
                        <Text style={{color:'orange'}} 
                        ><MaterialCommunity name="store-plus" size={40}
                            onPress={()=>{
                                navigation.navigate('Add_Product')
                            }}/>
                        </Text>
                    </View>
                </View>

                
            </ScrollView>
        );
}
    
const styles = StyleSheet.create({
    Container:{
        flex: 1,
        padding:20,
        backgroundColor:'#404040'
    },
    Title:{
        fontSize:55,
        fontWeight:'bold',
        color:'white',
    },
    btn:{
        flex:1,
        margin:9
    }
})
    
export default Home_Admin;