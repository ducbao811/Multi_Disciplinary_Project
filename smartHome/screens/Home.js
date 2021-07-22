import React, { useEffect,useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Alert
} from "react-native";
// https://reactnavigation.org/docs/getting-started
// npm install native-base --save
import { Header, Left, Right, Icon, Body, Switch } from 'native-base';
import { FONTS,COLORS } from '../constants';
import { Block } from '../components'
// npm install react-native-paper
import { ActivityIndicator } from 'react-native-paper';
// import { AIO_KEY } from '@env';
import LinearGradient from 'react-native-linear-gradient';
// import LinearGradient
function Home({ navigation }) {


    const [isGettingTemp, setGettingTemp] = React.useState(true);
    const [temperature, setTemperature] = React.useState(31) 

    const [isLightOn, setLightSwitch] = React.useState(false);
    const [isBuzzerOn, setBuzzerSwitch] = React.useState(false);
    
    const userName = route.params["params"]["userToken"];
    
    useEffect (() => {
        return fetch("https://io.adafruit.com/api/v2/KaNology/feeds/bbc-temperature/data?limit=1", {
            method: 'GET',
            headers: {
                'X-AIO-Key': 'Input AIO here!!!',
            }
        })
            .then((response) => response.json())
            .then((json) => {
                var startIdx = json[0]["value"].search("data") + 6;
                var endIdx = json[0]["value"].indexOf("\"",startIdx+1);
                var data = json[0]["value"].slice(startIdx+1,endIdx);
                setTemperature(data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => setGettingTemp(false))
            ;
     })

    const LightChangeHandler = (value) => {
        setLightSwitch(value);
        var on = 0;
        var onStr = "OFF";
        if (value) {
            on = 1;
            onStr = "ON";
        }
        fetch("https://io.adafruit.com/api/v2/KaNology/feeds/bbc-led/data", {
      
            method: "POST",
        
            body: JSON.stringify({ value: '{\"id\":\"1\",\"name\":\"LED\",\"data\":\"' + on +'\",\"unit\":\"\"}' }),

            headers: {
                'Content-Type': 'application/json',
                'X-AIO-Key': 'Input AIO here!!!',
            }
        })

            .then(response => response.json())
    
            .then(() => Alert.alert(
                'Notification',
                'Your LED has been turned ' + onStr,
            ))
        
            .catch((error) => {
                console.error(error);
            })
    }

    const BuzzerChangeHandler = (value) => {
        setBuzzerSwitch(value);
    }

    return (
        <View style={ {flex: 1} }>
            <Header style={ {backgroundColor:COLORS.black} }>
                <Left style={ {flex:1} }>
                    <Icon name="menu" style={{color: '#b06f13', fontSize:FONTS.h3.fontSize}} onPress={ () => navigation.openDrawer() } />
                </Left>
                <Body style={ {flex:1} } >
                    <Text style={ {color:'#b06f13', fontFamily : FONTS.h3.fontFamily, fontSize:FONTS.h3.fontSize} }> Home </Text>
                </Body>
                <Right style={ {flex:1} } />
            </Header>
            {/* Add linear background color*/}
            <LinearGradient colors={['#FFFFFF', '#efefbb', '#fbc9a0']} style={styles.body}>
            <Block style={styles.dashboard}>
                <Block column style={{ marginVertical: 14 * 2, }}>
                    <Text style={ {...FONTS.welcome} }>Welcome!</Text>
                    <Text style={ {...FONTS.name} }>{userName}</Text>
                </Block>

                <Block row style={{ paddingVertical: 30 }}>
                    <Block flex={1.5} row style={{}}>
                        {isGettingTemp ? <ActivityIndicator size="large" color="#b06f13"/> :
                            <Text style={{ ...FONTS.h1 }}>{temperature}</Text>
                        }
                        <Text h1 size={44} height={80} weight='600' spacing={0.1}>°C</Text>
                    </Block>
                    <Block flex={1} column>
                        <Text caption>Temperature</Text>
                    </Block>
                </Block>
                <Block row>
                    <TouchableOpacity style={ {marginLeft:30} } activeOpacity={0.5} onPress={ () => setGettingTemp(true) }>
                        <Icon name='refresh' style={{ fontSize: 30, color: '#b06f13'}} />
                    </TouchableOpacity>
                </Block>
                <ScrollView contentContainerStyle={styles.buttons} showsVerticalScrollIndicator={false}>
                    <Block column space="between">
                           <Block row space="around" style={{ marginVertical: 50 }}>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                >
                                    <Block center middle style={styles.button}>
                                    <Image source={require('../assets/images/bulb.png')} 
                    style={{width: 50, height: 50}} />
                                    <Text
                                        button
                                        style={{ marginTop: 14 * 0.5 }}
                                    >
                                        Led
                                    </Text>
                                    </Block>
                                </TouchableOpacity>
              
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                >
                                    <Block center middle style={styles.button}>
                                    <Image source={require('../assets/images/buzzer.png')} 
                    style={{width: 50, height: 50}} />
                                    <Text
                                        button
                                        style={{ marginTop: 14 * 0.5 }}
                                    >
                                        Buzzer
                                    </Text>
                                    
                                    </Block>
                                </TouchableOpacity>
              
                            </Block>
                    </Block>
                
                </ScrollView>
            
            </Block>
         </LinearGradient>

        </View>

        {/*  <View style={ {flex: 1} }>
            <Header style={ {backgroundColor:COLORS.black} }>
                 <Left style={ {flex:1} }>
        //             <Icon name="menu" style={{color: '#b06f13', fontSize:FONTS.h3.fontSize}} onPress={ () => navigation.openDrawer() } />
        //         </Left>
        //         <Body style={ {flex:1} } >
        //             <Text style={ {color:'#b06f13', fontFamily : FONTS.h3.fontFamily, fontSize:FONTS.h3.fontSize} }> Home </Text>
        //         </Body>
        //         <Right style={ {flex:1} } />
        //     </Header>
            
        //     <Block style={styles.dashboard}>
        //         <Block column style={{ marginVertical: 14 * 2, }}>
        //             <Text style={ {...FONTS.welcome} }>Welcome!</Text>
        //             <Text style={ {...FONTS.name} }>{userName}</Text>
        //         </Block>

        //         <Block row style={{ paddingVertical: 10 }}>
        //             <Block flex={1.5} row style={{}}>
        //                 {isGettingTemp ? <ActivityIndicator size="large" color="#b06f13"/> :
        //                     <Text style={{ ...FONTS.h1 }}>{temperature}</Text>
        //                 }
        //                 <Text h1 size={34} height={80} weight='600' spacing={0.1}>°C</Text>
        //             </Block>
        //             <Block flex={1} column>
        //                 <Text caption>Temperature</Text>
        //             </Block>
        //         </Block>
        //         <Block row>
        //             <TouchableOpacity style={ {marginLeft:30} } activeOpacity={0.5} onPress={ () => setGettingTemp(true) }>
        //                 <Icon name='refresh' style={{ fontSize: 30, color: '#b06f13'}} />
        //             </TouchableOpacity>
        //         </Block>
        //         <ScrollView contentContainerStyle={styles.buttons} showsVerticalScrollIndicator={false}>
        //             <Block column space="between">
        //                 <Block row space="around" style={{ marginVertical: 14 }}>
                            
        //                     <Block center middle style={styles.button}>
        //                         <Icon name='bulb' style={{ fontSize: 38, color: '#b06f13'}} />
        //                         <Text
        //                             style={{ marginTop: 24 * 0.5, color: '#b06f13' }}
        //                         >
        //                             LED
        //                         </Text>
        //                     </Block>
                    
        //                     <Block center middle style={styles.button}>
        //                         <Icon name='notifications' style={{ fontSize: 38, color: '#b06f13'}} />
        //                         <Text
        //                             style={{ marginTop: 24 * 0.5, color: '#b06f13' }}
        //                         >
        //                             Buzzer
        //                         </Text>
        //                     </Block>

        //                 </Block>
                        
        //                 <Block row space="around">
                            
        //                     <Block center middle>
        //                         <Switch value={isLightOn}  onValueChange={ (value) => LightChangeHandler(value) }></Switch>
        //                     </Block>
                        
        //                     <Block center middle>
        //                         <Switch value={isBuzzerOn } onValueChange={ (value) => BuzzerChangeHandler(value) }></Switch>
        //                     </Block>
        //                 </Block>
        //             </Block>
                
        //         </ScrollView>
            
        //     </Block>

        // </View> */}
    );
}

const styles = StyleSheet.create({
    dashboard: {
        flex: 1,
        padding: 28,
        marginBottom: -14 * 6,
    },
    buttons: {
        flex: 1,
        marginBottom: -14 * 6,
      },
    button: {
    backgroundColor: '#F4F5F7',
    width: 131,
    height: 131,
    borderRadius: 131 / 2,
    }
    // button: {
    //     width: 120,
    //     height: 120,
    //     borderRadius: 60,
    // }
});

export default Home;
