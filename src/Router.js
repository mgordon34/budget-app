import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'

export const RootStack = StackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
}, {
    initialRouteName: 'Home',
    navigationOptions: {
        headerTitleStyle: { textAlign: "center", flex: 1 },
        title: "Amy's Budget",
    }
});