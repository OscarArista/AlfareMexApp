import React from "react";
import { Text, StyleSheet, View, Image, TextInput, ScrollView} from "react-native";
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () =>{

const [ModaVisible,SetModalVisible] = React.useState(false);// Funcion quecibe dos valores (Hooks)
    return (
        <ScrollView>
            <View style={styles.Container}>  
                <Text style={styles.Title}>Explorar</Text>

                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <TextInput style={styles.Search} placeholder='Buscar' placeholderTextColor='#616A6B'></TextInput> 
                    <MaterialCommunity name="card-search" color="#F1C40F" size={59}></MaterialCommunity>
                </View>

                <View>
                <Text style={styles.TitleProduct}>Platos artesanales</Text>
                <Text style={styles.Desc_Product}>Los platos son unos de los elementos de la vajilla más destacables y donde el diseño es más protagonista. Los platos de cerámica artesanales no son como cualquier otro, se convierten en toda una inspiración para tu mesa, la representación perfecta de la estética, el vanguardismo y la esencia tradicional. </Text>
                    <Image style={styles.img} source={require('../Recursos/Img/Productos/Plato1.jpg')}>
                    </Image>
                </View>

                <View>
                <Text style={styles.TitleProduct}>Tazas artesanales</Text>
                <Text style={styles.Desc_Product}>Tazas de cerámica artesanal online que ponemos a tu disposición. A través de nuestra tienda online, podrás adquirir nuestras genuinas tazas de cerámica realizadas a mano con materias primas locales.</Text>
                    <Image style={styles.img} source={require('../Recursos/Img/Productos/plato2.jpg')}></Image>
                </View>

                <View>
                <Text style={styles.TitleProduct}>Tazas artesanales</Text>
                <Text style={styles.Desc_Product}>Tazas de cerámica artesanal online que ponemos a tu disposición. A través de nuestra tienda online, podrás adquirir nuestras genuinas tazas de cerámica realizadas a mano con materias primas locales.</Text>
                    <Image style={styles.img} source={require('../Recursos/Img/Productos/plato2.jpg')}></Image>
                </View>

                <View>
                <Text style={styles.TitleProduct}>Tazas artesanales</Text>
                <Text style={styles.Desc_Product}>Tazas de cerámica artesanal online que ponemos a tu disposición. A través de nuestra tienda online, podrás adquirir nuestras genuinas tazas de cerámica realizadas a mano con materias primas locales.</Text>
                    <Image style={styles.img} source={require('../Recursos/Img/Productos/plato2.jpg')}></Image>
                </View>
            </View>
        </ScrollView>
        
        
    );
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        padding:20,
        backgroundColor:'#404040'
        //backgroundColor:'#353535'
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
    TitleProduct:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        marginTop:9
    },
    Desc_Product:{
        color:'white',
        fontSize:15,
    },
    img:{
        marginTop:10,
        marginBottom:10,
        width:320,
        height:200,
        resizeMode:'stretch',
        borderRadius:10
    }
})


export default Home;