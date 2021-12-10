import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';

const Stack = createStackNavigator();

export default function StackNavigation1(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}
                options={{headerShown:false}}
            />

        </Stack.Navigator>

    )
}