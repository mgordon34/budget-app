import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';
import {NavigationActions} from 'react-navigation';

export default class SideBar extends Component {
    navigateToScren = (route, params) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route,
            params: params
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
            <View>
                <Button
                    title={'Home'}
                    onPress={this.navigateToScren('Home', {})}
                />
                <Button
                    title={'Details'}
                    onPress={this.navigateToScren('Details', {title: 'Details'})}
                />
            </View>
        )
    }
}
