/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react' ;

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions, 
  Image,
  TouchableOpacity,
} from 'react-native';



const { width, height } = Dimensions.get('window');

function App(): React.JSX.Element {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  const viewSignup = () => {
    setisLoggedIn(!isLoggedIn);
  };  
  const viewLogin = () => {
    setisLoggedIn(!isLoggedIn);
  };

  return (
    <SafeAreaView style={styles.bk}>

      <View style={styles.wlcmcontianer}>
        <Text style={styles.boldText}>Welcome</Text>
        <Text style={styles.regularText}>Please Login or Sign up to continue using  {'\n'} our app</Text>
{/* 
        {isLoggedIn &&     <Text style={styles.txtlft}>You already have an account?<Text style={styles.highlight} onPress={viewLogin}> Login</Text></Text> }
        {!isLoggedIn &&     <Text style={styles.txtlft}>Don't have an account? <Text style={styles.highlight}onPress={viewSignup} > Sign up</Text></Text> } */}

      </View>

      {/* <View style={styles.img}>
        <Image source={require('./assets/img.png')} style={styles.img}/>
      </View> */}

      <View style={styles.sclmda}>
        <Text style={styles.clrtxt}>Enter via Social Networks</Text>

        <View style={styles.container}>
          <View style={styles.circle}>
            <Image source={require('./assets/facebook.png')} style={styles.image}/>
          </View>
        
          <View style={styles.circle}>
            <Image source={require('./assets/X.png')} style={styles.image}/>
          </View>
        </View>

        <Text style={[styles.clrtxt,styles.blk]}> or Login with {'\n'} email</Text>

      </View>

      <View style={styles.form}>
        <View style={styles.inputView}>
          <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#003f5c"
          />
        </View>
      </View>



      <View style={styles.bottom}>
          <TouchableOpacity style={styles.button} onPress={viewSignup}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity> 

          {isLoggedIn &&     <Text style={styles.txtlft}>You already have an account?<Text style={styles.highlight} onPress={viewLogin}> Login</Text></Text> }
          {!isLoggedIn &&     <Text style={styles.txtlft}>Don't have an account? <Text style={styles.highlight}onPress={viewSignup} > Sign up</Text></Text> }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    marginTop: 20,
  },
  bk:{
    width:width,
    height:height,
    backgroundColor:'white',
  },
  boldText: {
    fontWeight: 'bold',  // Make text bold
    fontSize: 38,         // Adjust font size
    color: '#5159db',     // Change text color (you can use any color code or name)
    paddingBottom : 0.015 * height
  },
  regularText: {
    fontWeight: '600',  // Make text bold
    fontSize: 17,         // Adjust font size
    color: '#000000',     // Change text color (you can use any color code or name)
  },
  wlcmcontianer:{
    paddingLeft : 0.1 * width,
    paddingTop : 0.08 * height,
  },
  img:{
    width : 250,
    height:150,
    marginHorizontal : 0.1 * width,
    marginTop:0.03 * height
  },
  sclmda:{
    width : 0.8 * width,
    height:0.2 * height,
    marginHorizontal : 0.1 * width,
    marginTop:0.02 * height,
    alignItems:'center',
    position:'relative',
    top:30
  },clrtxt:{
    fontWeight: '900',  // Make text bold
    fontSize: 20,         // Adjust font size
    color: '#5159db',     // Change text color (you can use any color code or name)
    textAlign:"center"
    
  }, container: {
    flex: 1,
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Set the background color to white
    width:'100%'
  },
  circle: {
    width: 55,
    height: 55,
    borderRadius: 50, // Set half of the width and height to create a circle
    backgroundColor: '#fff', // Set the circle color to white
    elevation: 5, // Add shadow (elevation property works on Android)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginHorizontal:0.03 * width,
    justifyContent: 'center',
    alignItems: 'center',
  },blk:{
    color: '#000000',     // Change text color (you can use any color code or name)
    fontSize:17
  },txtlft:{
    textAlign:'left',
    width : 0.8 * width,
    color:'black',
    fontWeight:'bold',
    fontSize:14
  },image:{
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  form:{
    width:0.8*width,
    marginHorizontal:0.1 *width,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    bottom: 220,
    left: 0,
    right: 0,
  },  
  inputView: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    height: 60,
    marginBottom: 30,
    justifyContent: 'center',
    padding: 20,
    elevation: 3, // Add shadow (for Android)
    shadowColor: '#000', // Add shadow (for iOS)
    shadowOffset: { width: 0, height: 4 }, // Add shadow (for iOS)
    shadowOpacity: 0.3, // Add shadow (for iOS)
    shadowRadius: 3, // Add shadow (for iOS)
  },
  inputText: {
    height: 50,
    color: 'black',
  },  
  button:{
    backgroundColor:'blue',
    width : 0.8 * width,
    height: 0.07 * height, 
    marginHorizontal : 0.1 * width,
    marginTop:0.02 * height,
    marginBottom:20,
    borderRadius: 10,
  },
  buttonText:{
    textAlign:'center',
    textAlignVertical:'center',
    height: '100%', 
    color:'white',
    fontWeight:'900',
    fontSize:19
  },
  highlight:{
    color:'#5159db',
    fontWeight:'bold'
  },
  bottom:{
    width : 0.8 * width,
    height: 0.2 * height, 
    marginHorizontal : 0.1 * width,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  }
});

export default App;
