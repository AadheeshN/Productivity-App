import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Tips from '../screens/TipScreen';
import Support from '../screens/SupportScreen';
import Timetable from '../screens/TimetableScreen';
import Settings from '../screens/SettingScreen';
import ProperTimetable from '../screens/ProperTimeTable';


export const AppTabNavigator = createBottomTabNavigator({
  Tips : {
    screen: Tips,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/lightbulb.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Tips",
    }
  },
  Support : {
    screen: Support,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/chat.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Feedback",
    }
  },
   Timetable : {
    screen: Timetable,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/schedule.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Timetable",
    }
  },
  
    Settings : {
    screen: Settings,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/recovery.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Settings",
    }
  },
});