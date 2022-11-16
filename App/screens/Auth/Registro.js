import React from "react";
import { View, Button, Text, TextInput, StyleSheet, Image, ImageBackground, ScrollView, Alert } from "react-native";
// IMportar material para  iconos
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Style_Btn from "../../Componentes/Style_Btn";
import Style_link from "../../Componentes/Style_link";


const Registro = ({navigation}) =>{

    const [Username, setUsername] = React.useState('');
    const [Apaterno, setApaterno] = React.useState('');
    const [Amaterno, setAmaterno] = React.useState('');
    const [Gmail, setGmail] = React.useState('');
    const [Telefono, setTelefono] = React.useState('');
    const [Password, setPassword] = React.useState('');

    const Registrarme = () =>{

        //Alert.alert('Funciona');
        var URL = 'https://ahh.proyectostics.com/AppMovil/Registrar.php';

        fetch(URL,{
            method:'POST',
            body: JSON.stringify({
                name : Username,
                apaterno: Apaterno,
                amaterno: Amaterno,
                email: Gmail,
                celular: Telefono,
                password : Password,
            }),
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then((respuesta) => respuesta.json())
        .then((respuestaJSON) => {
            if(respuestaJSON == "Existe_Us"){
                Alert.alert('El usuario ya esta en uso')
            }else if(respuestaJSON == "OK"){
                navigation.navigate('Navigation');
            }else{
                Alert.alert('Al parecer hubo un problema, Intentalo más tarde')
            }
        })
        .catch((error) => {
            console.log(error);
        })

    }


    const [ShowPassword, setShowPassword] = React.useState(false);

    return (
    <ScrollView style={styles.Container}>
        <ImageBackground source={require('../../Recursos/Img/ceramics.jpg')} resizeMode='cover' style={styles.img}>
            <View style={styles.Overshadow}>
                <Text style={styles.Title}>
                Crear Cuenta
                </Text>
                <Image style={{ width:150, height:150, margin:30 }}source={require('../../Recursos/Icon/add_user.png')}></Image>

                <TextInput style={styles.Txt_Input} 
                    placeholderTextColor='gray' 
                    placeholder="Nombre de usuario"
                    onChangeText={Username => setUsername(Username)}
                    value={Username}/>
                
                <TextInput style={styles.Txt_Input} 
                    placeholderTextColor='gray' 
                    placeholder="Apellido Paterno"
                    onChangeText={Apaterno => setApaterno(Apaterno)}
                    value={Apaterno}/>
                
                <TextInput style={styles.Txt_Input} 
                    placeholderTextColor='gray' 
                    placeholder="Apellido Materno"
                    onChangeText={Amaterno => setAmaterno(Amaterno)}
                    value={Amaterno}/>

                <TextInput style={styles.Txt_Input} 
                    placeholderTextColor='gray' 
                    placeholder="Gmail"
                    onChangeText={Gmail => setGmail(Gmail)}
                    value={Gmail}/>

                <TextInput style={styles.Txt_Input} 
                    placeholderTextColor='gray' 
                    placeholder="Telefono"
                    onChangeText={Telefono => setTelefono(Telefono)}
                    value={Telefono}/>

                <View style={styles.InputPws}>
                    <TextInput style={{flex:1}} 
                        color='white' 
                        secureTextEntry={!ShowPassword} 
                        placeholderTextColor='gray' 
                        placeholder='Password'
                        onChangeText={Password => setPassword(Password)}
                        value={Password}/>
                    <MaterialCommunityIcons style={{paddingHorizontal:10}} name={ShowPassword ? "eye-off":"eye"} color='#F39C12' size={20}
                        onPress={()=>{ setShowPassword(!ShowPassword) }} />
                </View>

                <Style_Btn onPress={()=> Registrarme()} text={"Registrarme"} />

                <Style_link onPress={() => navigation.navigate('LoginScreen')} text={"Ya tengo una cuenta"} />

            </View>
        </ImageBackground>
    </ScrollView>     
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