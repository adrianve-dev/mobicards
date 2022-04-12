import React, { Component } from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { handleGetAllData } from '../actions/shared'
import { Card } from 'react-native-paper'
import DeckCard from './DeckCard'

class DeckList extends Component {

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    this.focusListener = navigation.addListener('focus', () => dispatch(handleGetAllData()))
  }

  componentWillUnmount() {
    this.focusListener()
  }

  renderItem = (props) => {
    return <DeckCard onDeckPress={this.onDeckPress} {...props} />
  }

  onDeckPress = (props) => this.props.navigation.navigate('DeckView', {...props})
  
  render() {
    const {decks, cards} = this.props
    
    let deckList = []
    Object.keys(decks).forEach((id) => { 
      const cardsId = decks[id].cardsId
      const count = cards[cardsId] ? Object.keys(cards[cardsId]).length : 0
      
      deckList.push({
        id,
        name: decks[id].name,
        cardsId,
        count
      })
    })

    return(
      deckList.length > 0
      ? <SafeAreaView style={styles.container}>
          <FlatList
            data={deckList}
            renderItem={this.renderItem}
          />
        </SafeAreaView>
      : <SafeAreaView style={styles.msg}>
          <Text style={styles.text}>No Decks</Text>
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  msg: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  }
})

const mapStateToProps = ({decks, cards}) => {
  return {
    decks,
    cards
  }
}

export default connect(mapStateToProps)(DeckList)