import React, { Component } from "react";

import { StyleSheet, Text, View, TextInput,TouchableOpacity, StatusBar, Image, Button, ImageBackground, Alert, } from 'react-native';

// IMportar material para  iconos
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// IMportar Componentes
import Style_Btn from "../../Componentes/Style_Btn";
import Style_link from "../../Componentes/Style_link";



//Funcion Log in
const Login = ({navigation})=>{

  const [user,setUser] = React.useState('');
  const [pws,setPws] = React.useState('');

    // const Data = {
    //   name:"user",
    //   password:"123qwerty"
    // }

  const acceso = () => {

      var URL = 'https://ahh.proyectostics.com/AppMovil/login.php';
      fetch(URL,{
        method:'POST',
        body: JSON.stringify({
          name : user,
          password : pws,
        }),
        headers:{
          'Accept':'application/json',
          'Content-Type': 'application/json'
        },
      })
      .then((respuesta) => respuesta.json()) //Crear objecto "respuesta " y especificar que es de tipo json, O mejor dicho se obtiene la respuesta y se parsea a JSON.
      .then((respuestaJSON) => {

        //Alert.alert(JSON.stringify(respuestaJSON));

        if(respuestaJSON == "User_N"){

          Alert.alert('El usuario NO existe!');

        }else if(respuestaJSON == "Pass_Inc"){

          Alert.alert('Password Invalido'); 

        }else if (respuestaJSON == "cliente"){

          navigation.navigate('Navigation')

        }else if(respuestaJSON == "administrador"){

          navigation.navigate('Home_Admin')
        }else{
          navigation.navigate('Home_Editor')
        }
      })
      .catch((error)=>{
        console.log(error);
      })
    }

  const [ShowPassword, setShowPassword] = React.useState(false);
  
      return(        
        <View style={styles.Container}>
          <ImageBackground source={require('../../Recursos/Img/ceramics.jpg')} resizeMode='cover' style={styles.img}>
          <View style={styles.Overshadow} >
            <Text style={styles.tittle}>Hola!</Text>

              <Image style={{width: 150, height:150, margin: 30, }} source={require('../../Recursos/Icon/user.png')}/>

              <TextInput style={styles.textInput} 
                placeholderTextColor='#fff'
                placeholder='Usuario'
                onChangeText={user =>  setUser(user)}
                value={user}/>
              
              <View style={styles.InputPws}>
                <TextInput style={{flex:1}} 
                color='white' 
                secureTextEntry={!ShowPassword} 
                placeholderTextColor='#fff' 
                placeholder='Password'
                onChangeText={pws => setPws(pws)}
                value={pws}/>

              <MaterialCommunityIcons style={{paddingHorizontal:10}} name={ShowPassword ? "eye-off":"eye"} color='#F39C12' size={20} onPress={()=>{ setShowPassword(!ShowPassword) }} />
              </View>
              
              <Style_Btn 
                onPress={()=> acceso()}
                text={"Iniciar Sesion"}
              />
              
              <Style_link 
                onPress={()=> navigation.navigate('Registro')}
                text={"¿Olvidaste tu contraseña?"}
              />

              <Style_link 
                onPress={()=> navigation.navigate('Registro')}
                text={"Crear una cuenta"}
              />
              <StatusBar style="auto" />
          </View>
          </ImageBackground>
        </View>
    );    
  
}

const styles = StyleSheet.create({
    Container:{
      flex: 1,
    },
    tittle: {
      fontSize: 40,
      color: '#fff',
      fontWeight: 'bold',
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#F39C12',
      fontSize: 14,
      padding: 10,
      width: '80%',
      height: 50,
      marginTop: 20,
      borderRadius:30,
      color:'white',
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
      justifyContent:'center'
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
});

export default Login;
