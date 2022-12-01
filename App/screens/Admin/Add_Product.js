import React, { useEffect } from "react";
import { View, StyleSheet, Modal, Alert, Pressable, Text, Image, Button, ScrollView, TextInput, Platform} from "react-native";
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Style_Btn from "../../Componentes/Style_Btn";
import * as ImagePicker from 'expo-image-picker';

const Add_Product = ({navigation})=>{


    const [Name_P, setName_P] = React.useState('');
    const [Descripcion, setDescripcion] = React.useState('');
    const [Precio, setPrecio] = React.useState('');
    const [Categoria, setCategoria] = React.useState('');
    const [image, setImage] = React.useState('');
    const [photoStatus, setphotoStatus] = React.useState('No se ha seleccionado ninguna imagen');

    const Add_P =()=>{

        useEffect(()=>{
            (async () =>{
                if(Platform.OS !== 'android'){
                    const {stutus} = await ImagePicker.requestCameraPermissionsAsync();
                   
                }
            })();
        },[])

        

        fetch(URL,{
          
        })
        .then((respuesta) => respuesta.JSON())
        .then((respuestaJSON) => {
            Alert.alert('Funciona')
        })
        .catch((error) => {
            console.log(error);
        })

        const pickImage = async()=>{
            if(!result.cancelled){
                setImage(result,uri);
                setphotoStatus('Listo!, Imagen cargada correctamente')
            }
            props.parentCallback(result)
        };

        return(
            <View style={{ alignItems: 'center' }}>
                <Button
                    title="Seleccionar Imagen"
                    onPress={pickImage}
                />
                <Text style={{ fontSize:12, marginBottom:20, color:"#888888"}}>{photoStatus}</Text>
                {image && <Image source={{uri: image}} style={{width:300, height:300}}></Image>}
            </View>
        );        
    }

    //const [ModaVisible,SetModalVisible] = React.useState(false);// Funcion quecibe dos valores (Hooks)

    return(
        <ScrollView style={styles.Container}>
            
            <View>
                <Text style={styles.Title}>Registrar Producto</Text>
            </View>

            <View>
                <Text style={{color:'orange', paddingEnd:25, paddingBottom:22}} 
                >
                    <MaterialCommunity name="arrow-left-circle" size={40}
                    onPress={()=>{
                        navigation.navigate('Home_Admin')
                    }}/>
                </Text>
            </View>

            <View style={styles.Container2}>
                <TextInput 
                    style={styles.Txt_Input} 
                    placeholder='Nombre del Producto' 
                    placeholderTextColor='#fff'
                    onChangeText={Name_P => setName_P(Name_P)}
                    value={Name_P}/>
                <TextInput 
                    style={styles.Txt_Input} 
                    placeholder='Descripcion del Producto' 
                    placeholderTextColor='#fff'
                    onChangeText={Descripcion => setDescripcion(Descripcion)}
                    value={Descripcion}/>
                <TextInput 
                    style={styles.Txt_Input}
                    placeholder='Precio' 
                    placeholderTextColor='#fff'
                    onChangeText={Precio => setPrecio(Precio)}
                    value={Precio}/>
                <TextInput 
                    style={styles.Txt_Input} 
                    placeholder='Categoria' 
                    placeholderTextColor='#fff'
                    onChangeText={Categoria => setCategoria(Categoria)}
                    value={Categoria}/>
                <Style_Btn onPress={()=> Add_P()} text={"Agregar"} />   
                </View>
                <Text style={styles.Text}>Agruegue una imagen</Text>
                
            
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#404040',
        //backgroundColor:'#757575',
        padding:20
        
    },
    Title:{
        fontSize:45,
        color:'white',
        fontWeight:'bold',
        marginBottom:22
    },
    Text:{
        color:'white',
        padding: 10,
        width: '80%',
        height: 50,
        marginTop: 20,
        textAlign:'center',
        justifyContent:'center',
    },
    Txt_Input:{
        borderWidth: 1,
        borderColor: 'gray',
        color: '#90caf9',
        fontSize: 14,
        paddingStart: 20,
        width: '100%',
        height: 50,
        marginTop: 5,
        borderRadius:30,
        color: '#fff',
        backgroundColor:'gray', 
        borderRadius:30
    },
    Container2:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center'
    },
    //.------Modal-------
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
        },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        paddingHorizontal:40,
        marginHorizontal:50
    },
    buttonOpen: {
        backgroundColor: "#F58B0D",
    },
    buttonClose: {
        backgroundColor: "#F58B0D",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    //.------Modal-------

});


export default Add_Product;

/* <View style={{alignItems:'center'}}>
                <MaterialCommunity name="image-outline" color='gray' size={150}></MaterialCommunity> 
            </View> */

// {/*----------Inicio Modal------------*/}
// <Modal style={{}}
// animationType="slide"
// transparent={true}
// visible={ModaVisible}
// onRequestClose={()=>{
//     Alert.alert("Modal has been closed")
//     SetModalVisible(!ModaVisible);
// }}
// >
// <View style={styles.centeredView}>
//     <View  style={styles.modalView}>
//         <Text style={styles.modalText}>Aun se esta trabajando 😉</Text>
//         <Pressable
//         style={[styles.button, styles.buttonClose]}
//             onPress={()=>{
//                 SetModalVisible(!ModaVisible)
//                 }
//             }
//         >
//             <Text style={styles.textStyle}>Regresar</Text>
//         </Pressable>
//     </View>
// </View>
// </Modal>

// <Pressable
// style={[styles.button, styles.buttonOpen]}
// onPress={()=>{
//     SetModalVisible(true)
//     }
// }
// >
// <Text style={styles.textStyle}>Adquirir</Text>
// </Pressable>
// {/*----------Fin Modal------------*/}
