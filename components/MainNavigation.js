import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Tabs from './Tabs'
import DeckView from './DeckView'
import AddCard from './AddCard'
import Quiz from './Quiz'

const Stack = createStackNavigator()

export default function MainNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Tabs} options={{
          title: 'Mobile Flashcards',
      }}/>
      <Stack.Screen name='DeckView' component={DeckView} options={({route, navigation}) => {
        console.log('Main Navigation route: ', route)
        if(route.params === undefined) return { title: route.name }
        return { title: route.params.name }
      }}/>
      <Stack.Screen name='AddCard' component={AddCard} options={{
          title: 'Add Card'
      }}/>
      <Stack.Screen name='Quiz' component={Quiz} options={{
          title: 'Quiz'
      }}/>
    </Stack.Navigator>
  )
}