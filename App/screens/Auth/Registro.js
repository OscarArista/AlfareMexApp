import React from "react";
import { View, Button, Text, TextInput, StyleSheet, Image, ImageBackground } from "react-native";
// IMportar material para  iconos
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Registro = ({navigation}) =>{

    
    

    
// fetch(URL,{
//   method:'POST'
// }).then((response)=>response.json()).then((responsejson)=>{
//   if(responsejson == "cliente"){
//       alert("bienvenido");
//   }
// })

    const [ShowPassword, setShowPassword] = React.useState(false);

    return (
    <View style={styles.Container}>
        <ImageBackground source={require('../../Recursos/Img/ceramics.jpg')} resizeMode='cover' style={styles.img}>
            <View style={styles.Overshadow}>
                <Text style={styles.Title}>
                Crear Cuenta
                </Text>
                <Image style={{ width:150,
                    height:150,
                    margin:30
                    }}
                    source={require('../../Recursos/Icon/add_user.png')}></Image>

                <TextInput style={styles.Txt_Input} placeholderTextColor='#fff' placeholder="Username"/>

                <TextInput style={styles.Txt_Input} placeholderTextColor='#fff' placeholder="Gmail"/>

                <View style={styles.InputPws}>
                    <TextInput style={{flex:1}} color='white' secureTextEntry={!ShowPassword} placeholderTextColor='#fff' placeholder='Password'/>
                    <MaterialCommunityIcons style={{paddingHorizontal:10}} name={ShowPassword ? "eye-off":"eye"} color='#F39C12' size={20}
                    onPress={()=>{
                        setShowPassword(!ShowPassword)
                    }} 
                    />
                </View>
                <View style={styles.InputPws}>
                <TextInput style={{flex:1}} color='white' secureTextEntry={!ShowPassword} placeholderTextColor='#fff' placeholder='Password Confirmation'/>
                <MaterialCommunityIcons style={{paddingHorizontal:10}} name={ShowPassword ? "eye-off":"eye"} color='#F39C12' size={20}
                onPress={()=>{
                    setShowPassword(!ShowPassword)
                }} 
                />
                </View>

                <Text style={styles.Bton}>
                <Button
                    color='#F39C12'
                    title='Registrarme'
                    onPress={()=>{
                    navigation.navigate('Navigation')
                }}/>
                </Text>

                <Text style={styles.text} 
                    onPress={()=>{
                    navigation.navigate('LoginScreen')
                }}>Ya tengo una cuenta</Text>    
            </View>
        </ImageBackground>
    </View>     
    );
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
    },
    Title:{
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',   
    },
    Txt_Input:{
        borderWidth: 1,
        borderColor: '#F39C12',
        color: '#90caf9',
        fontSize: 14,
        padding: 10,
        width: '80%',
        height: 50,
        marginTop: 20,
        borderRadius:30,
        color: '#fff',
    },
    Bton:{
        marginTop:20
    },
    text:{
        color: '#fff',
        padding: 10,
        width: '80%',
        height: 50,
        marginTop: 20,
        textAlign:'center',
        justifyContent:'center',
        
    },
    InputPws:{
        borderWidth:1,
        borderColor: '#F39C12',
        fontSize:14,
        padding:10,
        borderRadius:30,
        width:'80%',
        marginTop:20,
        height:50,
        flexDirection:'row',
        alignItems:'center',
        
    },
    Overshadow:{
        flex:1,
        backgroundColor:'#000000c0',
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center'
    },
    img:{
        flex:1,
    },
});

export default Registro;