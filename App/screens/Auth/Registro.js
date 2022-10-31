import React from "react";
import { View, Button, Text, TextInput, StyleSheet, Image, ScrollView } from "react-native";
// IMportar material para  iconos
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Registro = ({navigation}) =>{
    const [ShowPassword, setShowPassword] = React.useState(false);

    return (
    <View style={styles.Container}>

        <Text style={styles.Title}>
                Registro de Usuario
        </Text>
        <Image style={styles.imagen} source={require('../../Recursos/Icon/add_user.png')}></Image>

        <TextInput style={styles.Txt_Input} placeholderTextColor='#fff' placeholder="Username"/>

        <TextInput style={styles.Txt_Input} placeholderTextColor='#fff' placeholder="Gmail"/>

        <View style={styles.InputPws}>
            <TextInput style={{flex:1}} color='white' secureTextEntry={!ShowPassword} placeholderTextColor='#fff' placeholder='Password'/>
            <MaterialCommunityIcons style={{paddingHorizontal:10}} name={ShowPassword ? "eye-off":"eye"} color='gray' size={20}
            onPress={()=>{
                setShowPassword(!ShowPassword)
            }} 
            />
        </View>
        <View style={styles.InputPws}>
        <TextInput style={{flex:1}} color='white' secureTextEntry={!ShowPassword} placeholderTextColor='#fff' placeholder='Password Confirmation'/>
        <MaterialCommunityIcons style={{paddingHorizontal:10}} name={ShowPassword ? "eye-off":"eye"} color='gray' size={20}
        onPress={()=>{
            setShowPassword(!ShowPassword)
        }} 
        />
        </View>

        <Text style={styles.Bton}>
        <Button
            color='orange'
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
    Title:{
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
        
    },
    imagen:{
        width:150,
        height:150,
        margin:30
    },
    Txt_Input:{
        borderWidth: 1,
        borderColor: 'gray',
        color: '#90caf9',
        fontSize: 14,
        padding: 10,
        paddingStart: 20,
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

export default Registro;