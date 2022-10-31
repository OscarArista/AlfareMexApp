import React, { useEffect, useRef } from 'react';
import { Image, Animated, Button, Text, StyleSheet, View, Container } from "react-native";

//IMPORTAR Componente AL USAR navegacion Stack (Pilas)
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// IMPORTAR Componente de navegacion Al USAR Material Bottom Tabs nagavitor (Material de pestañas inferios)
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

//Importar vistas
import Navigation from '../screens/Navigation';
import Profile from '../screens/Profile';
import LoginScreen from '../screens/Auth/LoginScreen';
import Registro from '../screens/Auth/Registro';
import Register from '../screens/Proveedor/Register';
import Home_Admin from '../screens/Admin/Home_Admin';
import Add_Product from '../screens/Admin/Add_Product';

//CREAR Variable Para usar Stacks
const Stack = createNativeStackNavigator(); 

//CREAR Variable Para usar Tabs Infe..
//const Tab = createMaterialBottomTabNavigator(); 

/* 
            Estilos       */
const styles = StyleSheet.create({
  imagen:{
    width:200, 
    height:200,
    borderRadius:8
    
  },
  Fondo:{
    flex:1,
    backgroundColor: '#F39C12',
    justifyContent:'center',
    alignItems:'center'
  },
});

/* 
            CREAR FUNCIONES       */

// // Crear Componente Funcion para el Splash
// function MySplash({navigation}){

//   setTimeout(()=>{
//     navigation.navigate('Navigation'); // Ir a otra Pantalla
//   }, 4000); // Indicar los segundos

//   return ( 
//     <View style={styles.Fondo}>
//       {/* Agregar la etiqueta para darle animacion */}
//       <FadeInview> 
//         <Image style={styles.imagen} source={require('../Recursos/iconoAA.png')}></Image>
//       </FadeInview>
//     </View>
//   );
// }

// Crear Componente Funcion para el Splash
function MySplash({navigation}){

  setTimeout(()=>{
    navigation.navigate('LoginScreen'); // Ir a otra Pantalla login
  }, 4000); // Indicar los segundos

  return ( 
    <View style={styles.Fondo}>
      {/* Agregar la etiqueta para darle animacion */}
      <FadeInview> 
        <Image style={styles.imagen} source={require('../Recursos/Icon/iconoAA.png')}></Image>
      </FadeInview>
    </View>
  );
}

// Crear Componente Funcion Animacion para la imagen (Splash)
const FadeInview = (props)=>{

  const FadeAn = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.timing(
      FadeAn,
      {
        toValue:1,
        duration:4500, // Asignar valor de duracion
        useNativeDriver:true
      }
    ).start();
  }, [FadeAn])

  return (
    <Animated.View style={{...props.style, opacity:FadeAn}}
    >
      {props.children}
    </Animated.View>
  );
}

// Crear Componente Funcion para el Splash
function MyTab(){
  return(
    /*<NavigationContainer> componente que gestiona nuestro árbol de navegación*/
    <NavigationContainer> 
      {/* Stack.Navigator Aqui se agregan las pantallas que se requieran*/}
      <Stack.Navigator
        screenOptions = {{ // Por si queremos quitar el titulo de cada vista 
          headerShown: false,
        }}
          initialRouteName='MySplash' headerMode='none'
        > 
         {/*------------- VISTA Splash ----------- */}
        <Stack.Screen 
          name="MySplash" 
          component={ MySplash }
          //options={{ title: 'MySplash' }}
        />

        {/*------------- VISTA Navigation ----------- */}
        <Stack.Screen 
          name="LoginScreen" 
          component={ LoginScreen }
          //options={{ title: 'Perfil' }}
        />

        <Stack.Screen 
          name="Navigation" 
          component={ Navigation }
          //options={{ title: 'Home' }}
        />
        <Stack.Screen 
          name="Profile" 
          component={ Profile }
          //options={{ title: 'Perfil' }}
        />
        <Stack.Screen 
          name="Registro" 
          component={ Registro }
          //options={{ title: 'Perfil' }}
        />
        {/* <Stack.Screen 
          name="Register" 
          component={ Register }
          //options={{ title: 'Perfil' }}
        /> */}
        <Stack.Screen 
          name="Home_Admin" 
          component={ Home_Admin }
          //options={{ title: 'Perfil' }}
        />
        <Stack.Screen 
          name="Add_Product" 
          component={ Add_Product }
          //options={{ title: 'Perfil' }}
        />

      </Stack.Navigator>
    </NavigationContainer>    
  );
}

export default MyTab;



// const MyNavegacionTbs = () =>{
//   return(
//     <NavigationContainer>
//       <Tab.Navigator
//         activeColor='#000000' // Color de la pestaña activa
//         inactiveColor='#C8C6C5' // Color de la pestaña inactivo
//         barStyle={{backgroundColor:'#F58B0D'}} // Color del fondo del navegacion

//         >
//         <Tab.Screen
//           name="Home"
//           component={Home}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={Profile}
//         />

//         {/* <Tab.Screen
//           name="Login"
//           component={Login}
//         /> */}

//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }


//export default MyNavegacionTbs;


// const MyNavegacion = () => {

//   return (

/*<NavigationContainer> componente que gestiona nuestro árbol de navegación*/
    // <NavigationContainer> 
    //   {/* Stack.Navigator Aqui se agregan las pantallas que se requieran*/}
    //   <Stack.Navigator
    //     // screenOptions = {{ // Por si queremos quitar el titulo de cada vista 
    //     //   headerShown: false,
    //     // }}
    //   > 
        
    //     {/*------------- VISTA HOME ----------- */}
    //     <Stack.Screen 
    //       name="HomEE" 
    //       component={ Home }
    //       options={{ title: 'Home' }}
    //     />

    //     {/* ------------- VISTA PERFIL ----------- */}
    //     <Stack.Screen 
    //       name="Profile" 
    //       component={ Profile } 
    //       options={{ title: 'Profile'}}
    //       />
    //   </Stack.Navigator>
    // </NavigationContainer>

//   );
// };

//export default MyNavegacion;