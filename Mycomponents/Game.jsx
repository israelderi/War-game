import React, {useState} from 'react'


export default function Game(props) {

    const [playerDeck, setPlayerDeck] = useState([])
    const [compDeck, setCompDeck] = useState([])

    const [playerCard, setPlayerCard] = useState('')
    const [compCard, setCompCard] = useState('')

    const [playerScore, setPlayerScore] = useState(0)
    const [compScore, setCompScore] = useState(0)

    const [cardIndex, setCardIndex] = useState(0)
    const deckSize = 52;

    const createDecks = () => {

        var deck = []

        for (let card = 1, i = 1; card <= deckSize / 4; i++) {
            deck.push(card)
            if (i % 4 == 0) {
                card++;
            }
        }

        let playerDeck = []
        let compDeck = []

        for (let i = 0; i < deckSize / 2; i++) {
            playerDeck = setRandomCardToDeck(deck, playerDeck)
            compDeck = setRandomCardToDeck(deck, compDeck)
        }
        setPlayerDeck(playerDeck)
        setCompDeck(compDeck)
    }


    const setRandomCardToDeck = (deck, setDeck) => {
        let rnd = Math.floor(Math.random() * deck.length);
        setDeck.push(deck[rnd])
        deck.splice(rnd, 1)
        return setDeck;
    }

    const hitCard = () => {
        if (cardIndex < deckSize / 2) {
            setPlayerCard(playerDeck[cardIndex])
            setCompCard(compDeck[cardIndex])
            checkRoundWinner();
            setCardIndex(cardIndex + 1);
        }
        else {
            checkWinner();
        }
    }

    const checkRoundWinner = () => {
        if (playerDeck[cardIndex] > compDeck[cardIndex]){
            setPlayerScore(playerScore + 1)
            //console.log('player' + playerScore)
        }else{
            setCompScore(compScore + 1)
            //console.log('comp' + compScore)
        }
       
     }
    const checkWinner = () => { 
        if(playerScore > compScore ){
            alert('you win')
            props.setPlayerScore(true)
            props.ChangePage("EndGame")
            
        }else{
            alert('you lose try again')
            props.setPlayerScore(false)
            props.ChangePage("EndGame")
        }
    }
    
    
   


    return (
        <div>
            <p id='HelloPlayer'>Hi {props.Player.name} War start !! </p>
            <div>
            <input className='buttGame' type="button" onClick={createDecks} value="Deck" />
            <input className='buttGame' type="button" onClick={hitCard} value="Hit" /><br/>
            </div>
            <h2 id='nameGame'>{props.Player.name}</h2>
            <div className='Card'>{playerCard}</div><br/>
            <br/><div className='Card'>{compCard}</div>
            <h2 id='nameGame'>Comp</h2>
    
        </div>
    )
}
