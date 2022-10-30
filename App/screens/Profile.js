import React from "react";
import { Text, StyleSheet, View, TextInput, ScrollView, Button,} from "react-native";
import MaterialCommnity from 'react-native-vector-icons/MaterialCommunityIcons'

const Profile = () =>{
    return (
        <ScrollView style={styles.Container}>
            <View >  
                
                <Text style={styles.Title}>Perfil</Text>
                <View>
                    <MaterialCommnity name="image-outline" color='gray' size={90}></MaterialCommnity> 
                </View>
                <View>
                    <Text style={styles.Text}>Nombre:</Text>
                    <Text style={styles.Text}>Gmail:</Text>
                    <Text style={styles.Text}>Telefono:</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{color:'white', padding:20}}>Corregir Informacion</Text>
                    <MaterialCommnity style={{padding:10}} name="pencil" color='orange' size={30}></MaterialCommnity>
                </View>
        
                    <Button 
                        title="Historial"
                        color='orange'
                        />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    Container:{
        //flex: 1,
        padding:20,
        //backgroundColor:'black'
        backgroundColor:'#404040'
    },
    Title:{
        fontSize:50,
        fontWeight:'bold',
        color:'white',
        padding:40,
    },
    Text:{
        backgroundColor:'gray',
        color:'white',
        fontSize:15,
        paddingLeft:20,
        padding:10,
        borderRadius:10,
        margin:4,
        width:250
    },
    Btn:{
        
    }
})
export default Profile;