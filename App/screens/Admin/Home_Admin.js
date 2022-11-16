import React from "react";
import { Text, StyleSheet, View, Image, TextInput, ScrollView, Button} from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

const Home_Admin = ({navigation}) =>{

    return (
        <ScrollView style={styles.Container}>
            <View>
                <MaterialCommunity style={styles.Icono}
                        name="arrow-left-circle" 
                        color={'white'}
                        size={40}
                        onPress={()=>{
                        navigation.navigate('LoginScreen')
                }}/>
                <Text style={styles.Title}>Administrador</Text>
                <View>
                    <View style={{flexDirection:'row', marginTop:70}}>
                        <View style={styles.btn}>
                        <MaterialCommunity
                            name="store-plus"
                            color={'orange'} size={40}
                            onPress={()=>{
                                navigation.navigate('Add_Product')
                            }}/>
                            <Text>Agregar producto</Text>
                            
                        </View>
                        <View style={styles.btn}>
                        <MaterialCommunity
                            name="store-remove"
                            color={'orange'} size={40}
                            onPress={()=>{
                                navigation.navigate('Remove_Product')
                            }}/>
                            <Text>Eliminar producto</Text>
                            
                        </View>
                        
                    </View>
                    
                    <View style={{flexDirection:'row', marginTop:20}}>
                        <View style={styles.btn}>
                            <MaterialCommunity
                                name="account-plus"
                                color={'orange'} size={40}
                                onPress={()=>{
                                    navigation.navigate('Register')
                            }}/>
                            <Text>Validar proveedor</Text>
                        </View>
                        <View style={styles.btn}>
                            <MaterialCommunity
                                name="account-remove"
                                color={'orange'} size={40}
                                onPress={()=>{
                                    navigation.navigate('Remove_Provider')
                            }}/>
                            <Text>Eliminar proveedor</Text>
                        </View>
                    </View>

                </View>
            </View>
        </ScrollView>
    );
}
    
const styles = StyleSheet.create({
    Container:{
        flex: 1,
        padding:15,
        backgroundColor:'#757575'
    },
    Title:{
        fontSize:40,
        fontWeight:'bold',
        color:'white',
        padding:20,
        backgroundColor:'#FF9800',
        borderRadius:10,
        textAlign:'center'
    },
    Icono:{
        paddingBottom:30
    },
    btn:{
        flex:1,
        margin:3,
        backgroundColor:'white',
        borderRadius:10,
        padding:20,
    }
})
    
export default Home_Admin;

// <Card>
//                         <Card.Content>
//                             <Title>Agregar Producto</Title>                            
//                         </Card.Content>
//                         <MaterialCommunity name="store-plus" size={50} onPress={ ()=>{ navigation.navigate('Add_Product') }}/>
//                     </Card>