import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Wallpaper from '../Screens/Wallpaper';
import AboutScreen from '../Screens/AboutScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../Navigations/StackNavigation1';
import SearchScreen from '../Screens/SearchScreen';
import Guides from '../Navigations/StackNavigation2';
import RolesScreen from './TopTapNavigator1';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor:"#ff0000",
                inactiveTintColor:"#060606",
                showLabel:true,
                labelStyle:{
                    fontSize:12
                },
                style:{
                    paddingBottom:5,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
           
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel:"Inicio",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-home"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarLabel:"Search",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"search"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Guides"
                component={Guides}
                options={{
                    tabBarLabel:"Guides",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"folder-open"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Roles"
                component={RolesScreen}
                options={{
                    tabBarLabel:"Rol",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"people"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Wallpaper"
                component={Wallpaper}
                options={{
                    tabBarLabel:"Wallpaper",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"images"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="About"
                component={AboutScreen}
                options={{
                    tabBarLabel:"About",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-help-circle"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}