import React from 'react';
import { StyleSheet, Text, View,Button,Image , TouchableOpacity} from 'react-native';

import { Ionicons } from '@expo/vector-icons';


export default class Conversation extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../img/home.png')}
                style ={[styles.icon, {tintColor: "black"}]}
            />
        ),
    };

    constructor(prop){
        super(prop);

    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flexDirection:'row', marginTop:30}}>
                    <View style={{flex:1, marginLeft:20}}><Text>Login</Text></View>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}><Text style={{fontWeight:'bold', fontSize:18}}>CONVOS</Text></View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('DrawerOpen')} style={{flex:1}}>
                         <View style={{flex:1, alignItems:'flex-end', marginRight:20}}><Ionicons name="md-more" size={32} color="black"/></View>
                    </TouchableOpacity>
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
