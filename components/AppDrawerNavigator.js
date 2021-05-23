import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import Timetable from '../screens/TimetableScreen';
import Donation from '../screens/SupportMe';

import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions:{
      drawerIcon : <Icon name="home" type ="fontawesome5" />
    }
    },
  Donation : {
    screen : Donation,
    navigationOptions:{
      drawerIcon : <Icon name="cog" type ="font-awesome" />,
      drawerLabel : "Support Me"
    }
  },
//   Donation: {
//     screen : Donation,
//     navigationOptions:{
//     drawerIcon : <Icon name="coins" type ="font-awesome" />,
//     drawerLabel : "Support Developers"
//   }
// },
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })