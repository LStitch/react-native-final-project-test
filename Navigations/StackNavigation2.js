import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProgramarScreen from '../Screens/ProgramarScreen';
import JavascriptScreen from '../Screens/JavascriptScreen';
import ReactScreen from '../Screens/ReactScreen';

const Stack = createStackNavigator();

export default function StackNavigation1(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}> 
            <Stack.Screen name="ProgramarScreen" component={ProgramarScreen}
                options={{headerShown:false}}
            />

            <Stack.Screen name="JavascriptScreen" component={JavascriptScreen}
                options={{headerShown:true, headerTitle:'JavaScript'}}
            />

            <Stack.Screen name="ReactScreen" component={ReactScreen}
                options={{headerShown:true, headerTitle:'React'}}
            />
        </Stack.Navigator>

    )
}