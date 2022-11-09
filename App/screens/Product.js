import * as React from "react";
import { Text, StyleSheet, View, ScrollView, Image, Modal, Alert, Pressable } from "react-native";
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

// Crear componente funcion
const Producto = () =>{

const [ModaVisible,SetModalVisible] = React.useState(false);// Funcion quecibe dos valores (Hooks)

    return(
        
        <ScrollView>

        <View style={styles.Container}>  
            <Text style={styles.Title}>Productos</Text>

            
            <Text style={styles.TitleProduct}>Platos artesanales</Text>
                <View style={styles.Container2}>
                    <Text style={styles.Desc_Product}>Los platos son unos de los elementos de la vajilla más destacables y donde el diseño es más protagonista. Los platos de cerámica artesanales no son como cualquier otro, se convierten en toda una inspiración para tu mesa, la representación perfecta de la estética, el vanguardismo y la esencia tradicional. </Text>
                    <Image style={styles.img} source={require('../Recursos/Img/Productos/Plato1.jpg')}></Image>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={styles.Desc_Product}>Precio: $ 210.00</Text>
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
                </View>
                                    
                
                <Text style={styles.TitleProduct}>Tazas artesanales</Text>
                    <View style={styles.Container2}>
                        <Text style={styles.Desc_Product}>Tazas de cerámica artesanal online que ponemos a tu disposición. A través de nuestra tienda online, podrás adquirir nuestras genuinas tazas de cerámica realizadas a mano con materias primas locales.</Text>
                        <Image style={styles.img} source={require('../Recursos/Img/Productos/plato2.jpg')}></Image>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={styles.Desc_Product}>Precio: $ 210.00</Text>
                        {/*----------Inicio Modal------------*/}
                        {/* <Modal
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
                                    <Text style={styles.modalText}>Aun se esta trabajando</Text>
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
                        </Modal> */}

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
                    </View>
                {/* ndbkwdwfw................... */}


        </View>
    </ScrollView>
    );
}

//Dar estilos
const styles = StyleSheet.create({
    Container:{
        flex:1,
        padding:20,
        //backgroundColor:'black',
        backgroundColor:'#404040',
        justifyContent:'center'
    },
    Title:{
        fontSize:55,
        fontWeight:'bold',
        color:'white',
        textAlign:'center'
    },
    TitleProduct:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        marginTop:9,
        
    },
    Container2:{
        flexDirection:'row',
        flex:1,
        width:160,
        marginTop:10,
        marginBottom:10,
    },
    Desc_Product:{
        color:'white',
        fontSize:15,
    },
    img:{
        width:150,
        height:150,
        resizeMode:'stretch',
        borderRadius:10
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

})
export default Producto;