import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
} from "react-native";
import { Header, Left, Right, Icon, Body } from 'native-base';
// npm install react-native-vector-icons
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons"
import Entypo from "react-native-vector-icons/dist/Entypo"
import FontAwesome from "react-native-vector-icons/dist/FontAwesome"

import { images,COLORS,FONTS } from "../../constants";

const WarningHome = ({ navigation, route }) => {

    console.log('WarningHome')

    const userToken = route.params.userToken

    const onPress = () => {
        navigation.push('WarningLoading', {userToken: userToken})
    }

    return (
        <SafeAreaView style={{flex:1}}>

            <Header style={ {backgroundColor:COLORS.black} }>
                <Left style={ {flex:1} }>
                    <Icon name="menu" style={{color: 'white', fontSize:FONTS.h3.fontSize}} onPress={ () => navigation.openDrawer() } />
                </Left>
                <Body style={ {flex:1} } >
                    <Text style={ {color:'white', fontFamily : FONTS.h3.fontFamily, fontSize:FONTS.h3.fontSize} }>Warning</Text>
                </Body>
                <Right style={ {flex:1} } />
            </Header>

            <View style={styles.container}>
                <Image source={images.warningWall}
                    style={{
                        width: "80%",
                        height: "40%",
                        borderRadius: 20,
                        marginTop: 10
                    }}
                />

                <View style={{
                    marginTop: 20,
                    marginBottom: 20
                }}>
                    <Text style={{
                        fontSize: 20,
                        textAlign: "center"
                    }}>Secure your home with many caution alerts!</Text>
                </View>

                <View style={{
                    marginTop: 10,
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-evenly"
                }}>
                    <MaterialCommunityIcons
                        name='lightbulb-on-outline'
                        size={40}
                        color="orange"
                    />
                    <FontAwesome
                        name='thermometer'
                        size={40}
                        color="orange"
                    />
                    <Entypo
                        name='air'
                        size={40}
                        color="orange"
                    />
                </View>

                <View style = {{
                    marginTop: 40,
                    backgroundColor: "orange",
                    padding: 30,
                    borderRadius: 20
                }}>

                    <TouchableOpacity
                    onPress = {onPress}
                    >
                        <Text style={{
                            fontSize: 20,
                            color: "white"
                        }}>YOUR WARNING</Text>
                    </TouchableOpacity>
                </View>
            </View>
            

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: "white",
    //     // width: "100%",
    //     // justifyContent: "center",
    //     // alignItems: "center",
    //     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // }
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
})

export default WarningHome;