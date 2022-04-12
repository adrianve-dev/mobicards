import React, { Component } from 'react'
import { Text, View, StatusBar, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import Constants from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigation from './components/MainNavigation'
import { createStore } from 'redux'
import { setLocalNotification } from './utils/helpers'
import * as Notifications from 'expo-notifications';

import reducers from './reducers/index'
import middleware from './middleware/index'

function MobiCardsStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends Component {
  
  //notification listener setup:: https://gist.github.com/VeraZab/c3f13d51588bcfdf6799da65decf26fa#gistcomment-3747462
  componentDidMount() {
    //code here is similar as in Tyler's setLocalNotification but I have not had the time to refactor
    Notifications.requestPermissionsAsync()
      .then(({status}) => {
        console.log('status: ', status)
        Notifications.cancelAllScheduledNotificationsAsync()
        if (Constants.isDevice && status === 'granted'){
          console.log('Notification permissions granted.');
        }
      })
      
    this.listener = Notifications.addNotificationReceivedListener(this.handleNotification)
    setLocalNotification()
  }

  componentWillUnmount(){
    this.listener.remove()
  }

  handleNotification = () => {
    console.log('Notification Received');
  };

  render(){
    return (
      <Provider store={createStore(reducers, middleware)} >
        <MobiCardsStatusBar backgroundColor={'#ffffff'} barStyle='dark-content' />
        <View style={styles.container}>
          <NavigationContainer>
            <MainNavigation />
          </NavigationContainer>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  }
})
