import React, { useRef, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { View, Text, Animated, TouchableHighlight, StyleSheet } from 'react-native'

export default function DeckCard ({item, index, separators, onDeckPress}) {

  const opacity = useRef(new Animated.Value(1)).current
  const [pressed, setPressed] = useState(false)
  const isFocused = useIsFocused()
  
  
  if(isFocused) {
    Animated.timing(opacity, {toValue: 1, duration: 500, useNativeDriver: true}).start()
  }
  
  const handleFade = () => {
    return Animated.timing(opacity, {toValue: 0.5, duration: 500, useNativeDriver: true})
  }

  const textbyNumCard = (count) => {
    switch(count) {
      case 0:
        return `0 cards`
      case 1:
        return `1 card`
      default:
        return `${count} cards`
    }
  }

  const textStyles = !pressed 
    ? {
      subtitle: [styles.subtitle],
      text: [styles.text],
    }
    : {
      subtitle: [styles.subtitle, styles.textPressed],
      text: [styles.text, styles.textPressed],
    }
  

    return(
      <Animated.View style={[styles.card, { opacity }]}>
        <TouchableHighlight
          activeOpacity={0.85}
          key={item.id}
          onPress={() => {
            handleFade().start(({finished}) =>{
              onDeckPress(item)
            })
          }}
          underlayColor={'black'}
          onShowUnderlay={() => setPressed(true)}
          onHideUnderlay={() => setPressed(false)}>
          <View>
            <Text style={textStyles.subtitle}>{item.name}</Text>
            <Text style={textStyles.text}>{item && textbyNumCard(item.count)}</Text>
          </View>
        </TouchableHighlight>
      </Animated.View>
    )

}

const styles = StyleSheet.create({
  card: {
    flex: 2,
    margin: 10,
    backgroundColor: 'white',
  },
  textPressed: {
    color: 'white'
  },
  subtitle: {
    padding: 20,
    fontSize: 25,
    textAlign: 'left',
  },
  text: {
    fontSize: 18,
    padding: 20,
    textAlign: 'center'
  },
})