import React from 'react';
import {
    View,
    Text,
} from "react-native";
import { Header, Left, Right, Icon, Body } from 'native-base';
function Home({navigation}){
    return (
        <View style={ {flex: 1} }>
            <Header>
                <Left>
                    <Icon name="menu" onPress={ () => navigation.openDrawer() } />
                </Left>
                <Body />
                <Right />
            </Header>
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text> Home Screen </Text>
            </View>
        </View>
    );
}

export default Home;