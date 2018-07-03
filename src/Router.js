import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import SideBar from './SideBar'

export const RootStack = StackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
}, {
    initialRouteName: 'Home',
    navigationOptions: ({ navigation }) => ({
        headerTitleStyle: { textAlign: "center", flex: 1 },
        title: "Amy's Budget",
        headerRight: <View/>,
        headerLeft: <Text onPress={() => navigation.openDrawer()}> Menu</Text>,
    })
});

export const Drawer = DrawerNavigator({
    Root: RootStack
}, {
    initialRouteName: 'Root',
    contentComponent: SideBar,
    navigationOptions: ({ navigation }) => ({
        headerTitleStyle: { textAlign: "center", flex: 1 },
        title: "Drawer",
        headerRight: <View/>
    }),
});
