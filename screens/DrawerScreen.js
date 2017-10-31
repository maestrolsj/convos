import React from 'react';
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import {
    DrawerNavigator,
    StackNavigator
} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

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
            <View style={{flex:1}}>
                <View style={{flexDirection:'row', marginTop:30}}>
                    <View style={{flex:1, marginLeft:20}}><Ionicons name="md-menu" size={32} color="green" /></View>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}><Text style={{fontWeight:'bold', fontSize:15}}>CONVOS</Text></View>
                    <View style={{flex:1, alignItems:'flex-end', marginRight:20}}><Ionicons name="md-more" size={32} color="gold"/></View>
                </View>
                <Button
                    onPress={() => this.props.navigation.navigate('Notifications')}
                    title="Go to notifications"
                />
            </View>
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