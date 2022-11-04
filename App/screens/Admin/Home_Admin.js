import React from "react";
import { Text, StyleSheet, View, Image, TextInput, ScrollView, Button} from "react-native";
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

const Home_Admin = ({navigation}) =>{

        return (
            <ScrollView style={styles.Container}>
                <View>  
                    <Text style={styles.Title}>BienvenidO</Text>

                </View>

                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <View>
                        <Text style={{color:'orange', paddingEnd:25}} 
                        >
                            <MaterialCommunity name="arrow-left-circle" size={40}
                            onPress={()=>{
                                navigation.navigate('LoginScreen')
                            }}/>
                        </Text>
                    </View>

                    <View style={styles.btn}>
                        <Text style={{color:'orange'}} 
                        ><MaterialCommunity name="store-plus" size={40}
                            onPress={()=>{
                                navigation.navigate('Add_Product')
                            }}/>
                        </Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.SubTitle}>Validar Proveedor</Text>

                    <View style={{backgroundColor:'gray', borderRadius:15, marginBottom:20}}>
                        <Text style={styles.Text}>Nombre: xxxxxxx</Text>
                        <Text style={styles.Text}>Domicilio: xxxxx</Text>
                        <Text style={styles.Text}>Gmail: xxxxxx </Text>
                        <Text style={styles.Text}>Telefono: ######</Text>
                        <View style={{flexDirection:'row', padding:20}}>
                            <View style={styles.btn}>
                                <Button     
                                    title="Aprobar"
                                    color='orange'
                                    onPress={()=>{

                                    }}
                                >
                                </Button>

                            </View>
                            <View style={styles.btn}>
                                <Button     
                                    title="Eliminar"
                                    color='orange'
                                    onPress={()=>{

                                    }}
                                >
                                </Button>
                            </View>
                        </View>
                    </View>

                    <View style={{backgroundColor:'gray', borderRadius:15, marginBottom:20}}>
                        <Text style={styles.Text}>Nombre: xxxxxxx</Text>
                        <Text style={styles.Text}>Domicilio: xxxxx</Text>
                        <Text style={styles.Text}>Gmail: xxxxxx </Text>
                        <Text style={styles.Text}>Telefono: ######</Text>
                        <View style={{flexDirection:'row', padding:20}}>
                            <View style={styles.btn}>
                                <Button     
                                    title="Aprobar"
                                    color='orange'
                                    onPress={()=>{

                                    }}
                                >
                                </Button>

                            </View>
                            <View style={styles.btn}>
                                <Button     
                                    title="Eliminar"
                                    color='orange'
                                    onPress={()=>{

                                    }}
                                >
                                </Button>
                            </View>
                        </View>
                    </View>

                    <View style={{backgroundColor:'gray', borderRadius:15, marginBottom:20}}>
                        <Text style={styles.Text}>Nombre: xxxxxxx</Text>
                        <Text style={styles.Text}>Domicilio: xxxxx</Text>
                        <Text style={styles.Text}>Gmail: xxxxxx </Text>
                        <Text style={styles.Text}>Telefono: ######</Text>
                        <View style={{flexDirection:'row', padding:20}}>
                            <View style={styles.btn}>
                                <Button     
                                    title="Aprobar"
                                    color='orange'
                                    onPress={()=>{

                                    }}
                                >
                                </Button>

                            </View>
                            <View style={styles.btn}>
                                <Button     
                                    title="Eliminar"
                                    color='orange'
                                    onPress={()=>{

                                    }}
                                >
                                </Button>
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
        padding:20,
        backgroundColor:'black'
    },
    Title:{
        fontSize:55,
        fontWeight:'bold',
        color:'white',
    },
    Search:{
        flex:1,
        borderWidth:1,
        borderColor:'gray',
        margin:9,
        padding:8,
        height:40,
        borderRadius:12,
        color:'white',
        
    },
    SubTitle:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        marginTop:9,
        marginBottom:9
    },
    img:{
        marginTop:10,
        marginBottom:10,
        width:320,
        height:200,
        resizeMode:'stretch',
        borderRadius:10
    },
    Text:{
        color:'white',
        fontSize:18,
        paddingLeft:20,
        padding:10,
        width:250
    },
    btn:{
        flex:1,
        margin:9
    }
})
    
export default Home_Admin;