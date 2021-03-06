import React, { Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer';

import firebase from 'firebase';

export default class CustomSideBarMenu extends React.Component{
  render(){
    return(
      <View style={{flex:1}}>
        <View style={styles.drawerItemsContainer}>
          <DrawerItems {...this.props}/>
        </View>
        <View style={styles.logOutContainer}>
          <TouchableOpacity style={styles.logOutButton}
          onPress = {() => {
              this.props.navigation.navigate('Login')
              firebase.auth().signOut()
          }}>
            <Text style = {styles.logOutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  drawerItemsContainer:{
    flex:0.8,
    marginTop: 50,
  },
  logOutContainer : {
    flex:0.2,
    justifyContent:'flex-end',
    paddingBottom:30,
    marginBottom: 30,
  },
  logOutButton : {
    height:30,
    width:'100%',
    justifyContent:'center',
    padding:30,
    marginBottom: 30,
  },
  logOutText:{
    fontSize: 20,
    fontWeight:'bold'
  }
})