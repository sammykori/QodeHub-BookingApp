import { Notifications } from 'expo';
import React from 'react';
import {createStackNavigator} from 'react-navigation';

import Main from './main';
import Create from './create';
import AllList from './allList'

const RootStackNavigator = createStackNavigator(
  {
    Main: {
      screen: Main
    },
    Create: {
      screen: Create
    },
    AllList: {
        screen: AllList
    },
  },
  {
    initialRouteName: "Main",
    headerMode: "none"
  },
);

export default class RootNavigator extends React.Component {

  render() {
    return <RootStackNavigator />;
  }
}
