import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import Expo, { AppLoading, Asset, Font } from 'expo';
import {createStackNavigator} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import RootNavigator from './src/navigate'

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };
  
  async register(){
    const {status} = await Expo.Permissions.askAsync(Expo.Permissions.NOTIFICATIONS);
    console.log(status);
    // if(status !== 'granted'){
    //   alert('You nedd to enable notification permissions in settings')
    // }
    // const local = await Expo.Notifications.presentLocalNotificationAsync(localNotification)
    const token = await Expo.Notifications.getExpoPushTokenAsync();
    console.log('hi '+token);
    
  }
  componentWillMount(){
    this.register();
  }
  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
          {<RootNavigator />}
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
