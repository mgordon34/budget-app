import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

import {HeaderBackButton} from 'react-navigation'

export default class DetailsScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title,
        headerRight: <View/>,
        headerLeft: <HeaderBackButton onPress={() => navigation.goBack()}/>,
    });

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Details
                </Text>
                <Button
                    title="Press Here for Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
