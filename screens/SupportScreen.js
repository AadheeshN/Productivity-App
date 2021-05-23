import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { RFValue } from "react-native-responsive-fontsize";
import MyHeader from '../components/MyHeader';
import firebase from 'firebase';
import db from '../config';

export default class Support extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reason: '',
      description: '',
    }
  }

  submitRequest(reason, description) {
    db.collection("supports").add({
      reason: reason,
      description: description,
      date: firebase.firestore.FieldValue.serverTimestamp(),
    })
    Alert.alert("Feedback Sumitted Successfully")
  }

  render() {
    return(
      <SafeAreaProvider style = {styles.view}>
        <MyHeader title="Support" navigation={this.props.navigation} />
        <TextInput 
        style = {styles.textBox}
        placeholder = "Issue"
        value = {this.state.reason}
        onChangeText = {(text) => this.setState({
          reason: text,
        })}        
        />
        <TextInput 
        style = {styles.textBox2}
        placeholder = "Brief Description"
        value = {this.state.description}
        multiline = {true}
        numberOfLines = {5}
        onChangeText = {(text) => this.setState({
          description: text,
        })}        
        />
        <TouchableOpacity style = {styles.button}>
        <Text style = {styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </SafeAreaProvider>
    )
  }
}

const styles = StyleSheet.create({
  view:{
    flex: 1,
    backgroundColor: "#fff"
  },
  textBox: {
    width: "80%",
    height: RFValue(35),
    borderWidth: 0.7,
    borderColor: "#000",
    alignItems : 'center',
    alignSelf: 'center',
    fontSize: RFValue(20),
    marginTop: 50,
  },
    textBox2: {
    width: "80%",
    height: 150,
    borderWidth: 0.7,
    borderColor: "#000",
    alignItems : 'center',
    alignSelf: 'center',
    fontSize: RFValue(20),
    marginTop: 20,
  },
  button: {
    width: "80%",
    height: RFValue(50),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    borderRadius: RFValue(25),
    backgroundColor: "orange",
    shadowColor: "#000",
    marginBottom: RFValue(10),
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: 100,
  },
  buttonText: {
    fontSize: RFValue(23),
    color: "#000",
  },
})