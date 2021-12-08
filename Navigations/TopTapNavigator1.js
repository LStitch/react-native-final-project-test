import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Constants from 'expo-constants';
import TopLaners from '../Screens/TopLaners';
import Junglers from '../Screens/Junglers';
import MidLaners from '../Screens/MidLaners';
import ADCarrys from '../Screens/ADCarrys';
import Supports from '../Screens/Supports';

const Tab =  createMaterialTopTabNavigator();

export default function TopTapNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="TopLaners"
            tabBarOptions={{
                activeTintColor:"#ff6600",
                inactiveTintColor:"#060606",
                showIcon:true,
                showLabel:true,
                labelStyle:{
                    fontSize:11
                },
                style:{
                    paddingTop:Constants.statusBarHeight,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
            <Tab.Screen
                name="TopLaners"
                component={TopLaners}
                options={{
                    tabBarLabel:"Top",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"person-circle-outline"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Junglers"
                component={Junglers}
                options={{
                    tabBarLabel:"Jungle",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"person-circle-outline"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="MidLaners"
                component={MidLaners}
                options={{
                    tabBarLabel:"Mid",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"person-circle-outline"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="ADCarrys"
                component={ADCarrys}
                options={{
                    tabBarLabel:"ADC",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"person-circle-outline"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Supports"
                component={Supports}
                options={{
                    tabBarLabel:"Support",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"person-circle-outline"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}