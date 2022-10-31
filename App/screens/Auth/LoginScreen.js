import React from "react";
import { StyleSheet,Text,View, TextInput,StatusBar,Image,Button} from 'react-native';
// IMportar material para  iconos
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Funcion Log in
const Login = ({navigation})=>{

  const [ShowPassword, setShowPassword] = React.useState(false);
  
        return(
        <View style={styles.Container}>
            <Text style={styles.tittle}>Inicio de sesión</Text>
            <Image
              style={{width: 150,
                height:150,
                margin: 30 
              }}
              source={require('../../Recursos/Icon/iconoAA.png')}
            />
            <TextInput style={styles.textInput} placeholderTextColor='#fff' placeholder='Usuario'/>

            <View style={styles.InputPws}>

            <TextInput style={{flex:1}} color='white' secureTextEntry={!ShowPassword} placeholderTextColor='#fff' placeholder='Password'/>
            
            <MaterialCommunityIcons style={{paddingHorizontal:10}} name={ShowPassword ? "eye-off":"eye"} color='gray' size={20}
            onPress={()=>{
              setShowPassword(!ShowPassword)
            }} 
            />
            </View>
            <Text style={styles.boton}>
            <Button 
              color="orange"
              title="Iniciar sesión"
              onPress={()=>{
                navigation.navigate('Navigation')
              }}
            />
            </Text>

            <Text style={{color:'gray', marginTop:20, textAlign:'center'}} 
            >Olvide mi contraseña</Text>

            <Text style={styles.text} 
            onPress={()=>{
              navigation.navigate('Registro')
            }}>¿Aun no te haz registrado?</Text>

            <Button 
              title="Vista previa admin"
              color='orange'
              onPress={()=>{
                navigation.navigate('Home_Admin')
              }}
              />
            <StatusBar style="auto" />
        </View>
);   
}

const styles = StyleSheet.create({
    Container:{
    flex: 1,
    //backgroundColor: '#000',
    backgroundColor:'#404040',
    alignItems: 'center',
    justifyContent: 'center',
    },
    tittle: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    
    },
    textInput: {
      borderWidth: 1,
      borderColor: 'gray',
      fontSize: 14,
      padding: 10,
      width: '80%',
      height: 50,
      marginTop: 20,
      borderRadius:30,
      color:'white',
    },
    text:{
      color: '#fff',
      padding: 10,
      paddingStart: 20,
      width: '80%',
      height: 50,
      marginTop: 22,
      marginBottom:12,
      textAlign:'center',
      
    },
    boton:{
      padding: 10,
      paddingStart: 20,
      width: '30%',
      height: 50,
      marginTop: 20,
      textAlign:'center'
    },
    // img:{
    //   width:20, 
    //   height:20, 
    //   //left:170
    // },
    InputPws:{
      borderWidth:1,
      borderColor: 'gray',
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