import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

export default class HomeScreen extends Component {

    // static navigationOptions = {
    //     headerTitleStyle: { alignSelf: 'center', textAlign: 'center' },
    //     title: "Amy's Budget",
    // };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Amy's Budget App
                </Text>
                <Text style={styles.instructions}>
                    Save Dat Monaaaaaaaaaaaaay
                </Text>
                <Button
                    title="Press Here"
                    onPress={() => this.props.navigation.navigate('Details', {title: 'Details'})}
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
