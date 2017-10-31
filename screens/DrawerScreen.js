import React from 'react';
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import {
    DrawerNavigator,
    StackNavigator
} from 'react-navigation';

import Stack1Screen from './Stack1Screen';
import Stack2Screen from './Stack2Screen';

const StackNavi = StackNavigator({
    Stack1Screen: { screen: Stack1Screen },
    Stack2Screen: { screen: Stack2Screen }
});


class DrawerItem1Screen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../img/home.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

export default  MyApp = DrawerNavigator({
    Home: {
        screen: DrawerItem1Screen,
    },
    SimpleApp: {
        screen: StackNavi,
    },
});