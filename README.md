# MobiCards :: Flashcards Mobile App

**(tested with iOS)**
To run Expo server on your computer, 
- run: `npm install` in the root level directory
- run: `npm start`

To run the app on your mobile device
- download Expo Client from the app store.
- create an account or login
- scan the QR code shown in the command prompt to be directed to Expo Client
- allow the app to be bundled and it should be opened automatically

## Features

MobiCards is a Flashcards app that allows you to 

- Create Flashcard Decks
- Add Flashcards to your Decks
- Take Quizzes with your Flashcards

## Data

Data is stored locally using AsyncStorage and Redux to manage state.

Example: 

```
{
  "decks": {
    "n1tqx0gp3zhxrr88b2omx": {
      "id":"n1tqx0gp3zhxrr88b2omx",
      "name":"Standard",
      "cardsId":"8tid7656jujdcpmzejtwsl"
    },
  },
  "cards": {
    "8tid7656jujdcpmzejtwsl": {
      "zojlh75gs1b4yaslsrjs": {
        "id":"zojlh75gs1b4yaslsrjs",
        "question":"What color is the sky?",
        "answer":"Blue",
        "deckRef":"8tid7656jujdcpmzejtwsl"
      },
    },
  }
}
```

Cards are grouped by the deck they correspond to.. `deckRef` in `cards` object 
corresponds to `cardsId` in `decks` object.

`cards[deckRef]` or `cards[cardsId]`

This is used to easily reference all cards associated with a deck instead of 
pulling all cards and filtering by `deckRef`.

Every card and every deck has a unique Id