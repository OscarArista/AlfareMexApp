import React from "react";
import { View, StyleSheet, Modal, Alert, Pressable, Text, Image, Button, ScrollView, TextInput} from "react-native";
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

const Add_Product = ({navigation})=>{
    const [ModaVisible,SetModalVisible] = React.useState(false);// Funcion quecibe dos valores (Hooks)

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

            <View>
                <TextInput style={styles.Txt_Input} placeholder='Nombre del Producto' placeholderTextColor='#fff'/>
                <TextInput style={styles.Txt_Input} placeholder='Descripcion del Producto' placeholderTextColor='#fff'/>
                <TextInput style={styles.Txt_Input} placeholder='Precio' placeholderTextColor='#fff'/>
                <TextInput style={styles.Txt_Input} placeholder='Categoria' placeholderTextColor='#fff'/>
            </View>

            <Text style={styles.Text}>Agruegue una imagen</Text>
            <View style={{alignItems:'center'}}>
                <MaterialCommunity name="image-outline" color='gray' size={150}></MaterialCommunity> 
            </View>
            
            {/*----------Inicio Modal------------*/}
            <Modal style={{}}
                        animationType="slide"
                        transparent={true}
                        visible={ModaVisible}
                        onRequestClose={()=>{
                            Alert.alert("Modal has been closed")
                            SetModalVisible(!ModaVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View  style={styles.modalView}>
                                <Text style={styles.modalText}>Aun se esta trabajando 😉</Text>
                                <Pressable
                                style={[styles.button, styles.buttonClose]}
                                    onPress={()=>{
                                        SetModalVisible(!ModaVisible)
                                        }
                                    }
                                >
                                    <Text style={styles.textStyle}>Regresar</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>

                    <Pressable
                    style={[styles.button, styles.buttonOpen]}
                        onPress={()=>{
                            SetModalVisible(true)
                            }
                        }
                    >
                        <Text style={styles.textStyle}>Adquirir</Text>
                    </Pressable>
                {/*----------Fin Modal------------*/}

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#404040',
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