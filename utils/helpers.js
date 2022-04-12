import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Notifications from 'expo-notifications'

export const NOTIFICATION_KEY = 'adrianve-mobicards:notifications'

export function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function getPercent(part, total) {
  return ((part/total) * 100).toFixed(2)
}

export function createDeck(name) {
  return {
      id: generateUID(),
      name,
      cardsId: generateUID()
    }
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(() => Notifications.cancelAllScheduledNotificationsAsync)
}

//legacy
function createNotification(){
  return {
    title: 'Time to Study!',
    body: "Don't forget to study today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    },    
  }
}

export function setLocalNotification() {
  //check if notification exists
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if(data === null) { // no notification already
        Notifications.requestPermissionsAsync()
          .then(({status}) => {
            //so we don't set two notifications
              Notifications.cancelAllScheduledNotificationsAsync()

              //set scheduled time
              //https://knowledge.udacity.com/questions/341416
              let tomorrow = new Date();
              // 24 hours from now
              tomorrow = tomorrow.getTime() + (1000 * 60 * 60 * 24);
              let notificationDate = new Date(tomorrow);

              console.log('notificationDate: ', notificationDate)
              console.log('schedule: ')
              Notifications.scheduleNotificationAsync({
                content: {
                  title: 'Time to Study!',
                  body: "Don't forget to study today",
                  sound: true,
                  priority: Notifications.AndroidNotificationPriority.HIGH,
                },
                trigger: { 
                  seconds: Date.parse(notificationDate) / 1000
                },
              })
              .catch((e) => console.warn(e))
              //set in local storage
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
          })
      }
    }).catch((e) => console.warn(e))
}