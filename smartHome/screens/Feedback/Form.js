import React, { useState } from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Form, Item, Input, Body, Text, CheckBox, Button} from 'native-base';

/**
 * Profile screen
 */
// export default class FeedForm  extends React.Component {

    

//     render() {

//         const { navigate, state } = this.props.navigation;

//         return (
//             <View style={styles.container}>
//         <View style={styles.top}></View>

//         <View style={styles.middle}>
//           <Text style={styles.textContainer}>Every feedback will make us better !</Text>

//           <View style={styles.formArea}>
            
//             <Form style={styles.mainForm}>
//               <Item style={styles.formItems}>
//                 <Input placeholder="Name" style={styles.Input} />
//               </Item>
//               <Item style={styles.formItems}>
//                 <Input placeholder="Email" style={styles.Input} />
//               </Item>
//               <Item style={styles.formItems}>
//                 <Input placeholder="Phone number" style={styles.Input} />
//               </Item>
//               <Item style={styles.formItems}>
//                 <Input placeholder="Problem" style={styles.Input} />
//               </Item>

              
//               <View style={styles.Button}>
//                 <Button block style={styles.mainBtn}
//                    onPress={() => navigate('Feedback')}
                        
//                     >
//                   <Text style={styles.btnText}>Submit</Text>
//                 </Button>
//               </View>
              
            
//             </Form>
//           </View>
//         </View>
//         <View style={styles.bottom}></View>
//       </View>
//         );

//     }

// }

function FeedForm({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [problem, setProblem] = useState('');
  const onSubmit = () => {
    fetch('http://127.0.0.1:3000/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        phoneNumber,
        problem


      })
      }).then(res => res.json())
            .then(data => {
                console.log(data)
                navigation.navigate('Feedback')
            }).catch(err => {
                console.log("error", err)
            })
    Alert.alert("Success", "your feedback has been sent !")

        setName('')
        setEmail('')
        setPhoneNumber('')
        setProblem('')
    
  };
  return (
      <View style={styles.container}>
        <View style={styles.top}></View>

        <View style={styles.middle}>
          <Text style={styles.textContainer}>Every feedback will make us better !</Text>

          <View style={styles.formArea}>
            
            <Form style={styles.mainForm}>
              <Item style={styles.formItems}>
                <Input placeholder="Name" style={styles.Input} onChangeText={name => setName(name)}
          defaultValue={name} />
              </Item>
              <Item style={styles.formItems}>
                <Input placeholder="Email" style={styles.Input} onChangeText={email => setEmail(email)}
          defaultValue={email}  />
              </Item>
              <Item style={styles.formItems}>
                <Input placeholder="Phone number" style={styles.Input} onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
          defaultValue={phoneNumber} />
              </Item>
              <Item style={styles.formItems}>
                <Input placeholder="Problem" style={styles.Input} onChangeText={problem => setProblem(problem)}
          defaultValue={problem} />
              </Item>

              
              <View style={styles.Button}>
                <Button block style={styles.mainBtn}
                   onPress={() => onSubmit()}
                        
                    >
                  <Text style={styles.btnText}>Submit</Text>
                </Button>
              </View>
              
            
            </Form>
          </View>
        </View>
        <View style={styles.bottom}></View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  top: {
    position: 'relative',
    backgroundColor: '#F4A201',
    paddingRight: 12.7,
    paddingLeft: 12.7,
    height: 250,
  },
  middle: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'absolute',
    zIndex: 2,
    backgroundColor: 'transparent',
    paddingLeft: 26.3,
    paddingRight: 26.3,
  },
  bottom: {
    position: 'relative',
    height: '100%',
    paddingRight: 12.7,
    paddingLeft: 12.7,
    backgroundColor: '#F4A201',
  },
  textContainer: {
    color: '#FCFDFF',
    fontFamily: 'GoogleSans-Bold',
    fontSize: 24,
    marginBottom: 30,
    position: 'relative',
    top: '10%',
    alignSelf: 'center',
    
  },
  formArea: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    top: '10%',
    paddingBottom: 70,
  },
  signin: {
    top: 0,
    color: '#2D3057',
    marginTop: 15,
  },
  formItems: {
    marginTop: 15,
    borderBottomColor: '#2D3057',
  },
  Input: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
  },
  
  loginText: {
    color: '#2D3057',
    fontSize: 10,
    fontFamily: 'GoogleSans-Bold',
    fontWeight: 'bold',
  },
  cboxText: {
    fontFamily: 'GoogleSans-Medium',
    fontSize: 10,
  },
  Button: {
    padding: 30.8,
    borderRadius: 4,
  },
  mainBtn: {
    backgroundColor: '#1DDCAF',
  },
  btnText: {
    color: '#2D3057',
    fontFamily: 'GoogleSans-Medium',
    fontSize: 12,
  },
});

export default FeedForm;