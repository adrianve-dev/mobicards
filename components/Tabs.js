import React from 'react'
import AddDeck from './AddDeck'
import DeckList from './DeckList'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="DeckList"
      screenOptions={{
        "tabBarItemStyle": {
          "height": 50
        },
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ]
      }}>
      <Tab.Screen
        name="DeckList"
        component={DeckList}
        options={{
          headerShown: false,
          title: 'Decks',
          tabBarLabel: 'Decks',
          tabBarIcon: ({tintColor}) => <Ionicons name='ios-layers' size={30} color={tintColor} />
        }}
        />
      <Tab.Screen
        name="AddDeck"
        component={AddDeck}
        options={{
          headerShown: false,
          title: 'Add Deck',
          tabBarLabel: 'Add Deck',
          tabBarIcon: ({tintColor}) => <Ionicons name='ios-add-circle' size={30} color={tintColor} />
        }}
        />
    </Tab.Navigator>
  )
}