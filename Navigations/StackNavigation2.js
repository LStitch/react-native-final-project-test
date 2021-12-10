import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Guides from '../Screens/Guides';
import Intermedio from '../Screens/Intermedio';
import Basico from '../Screens/Basico';
import Avanzado from '../Screens/Avanzado';

const Stack = createStackNavigator();

export default function StackNavigation1(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}> 
            <Stack.Screen name="Guides" component={Guides}
                options={{headerShown:false}}
            />

            <Stack.Screen name="Basico" component={Basico}
                options={{headerShown:true, headerTitle:'Basico'}}
            />

            <Stack.Screen name="Intermedio" component={Intermedio}
                options={{headerShown:true, headerTitle:'Intermedio'}}
            />

            <Stack.Screen name="Avanzado" component={Avanzado}
                options={{headerShown:true, headerTitle:'Avanzado'}}
            />
        </Stack.Navigator>

    )
}