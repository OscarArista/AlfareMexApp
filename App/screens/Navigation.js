import React from "react";
import { Button, Text, StyleSheet, View } from "react-native";

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// IMPORTAR Componente de navegacion Usando Material Bottom Tabs nagavitor (Material de pestañas inferios)
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
// IMportar material para  iconos
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//Importar vistas
import Home from "./Home";
import Profile from './Profile';
import Productos from './Product';


const Tab = createMaterialBottomTabNavigator(); //CREAR Para usar Tabs Infe..

// Crear componente funcion
function Homee(){
    return(
    
    <NavigationContainer independent={true}>
      <Tab.Navigator
        activeColor='#000000' // Color de la pestaña activa
        inactiveColor='#FFFFFF' // Color de la pestaña inactivo
        barStyle={{ backgroundColor: '#F58B0D' }} // Color del fondo del navegacion
        
        >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            //tabBarLabel: 'Updates',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Productos"
          component={Productos}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cart" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    
    )
};

export default Homee;




// // import * as React from "react";
// // import { Button, Text, StyleSheet, View } from "react-native";

// // // Crear componente funcion
// // const Home = ({ navigation }) =>{
// //     return(
// //     <View style={styles.Contenedor}>
// //         <Text>Ahh</Text>
// //         <Button //Agregar button para ir a otra vista
// //             title="Ir a otra pantalla"
// //             onPress={() => {
// //                 navigation.navigate('Profile') // Vista a direccionar con navigate y el name que queremos ir 
// //             }}
// //         />
// //     </View>
// //     );
// // }

// // // Dar estilos
// // const styles = StyleSheet.create({
// //     Contenedor:{
// //         flex: 1,
// //         backgroundColor: '#fff',
// //         alignItems: 'center',
// //         justifyContent: 'center',

// //     },
// // });

// // export default Home;