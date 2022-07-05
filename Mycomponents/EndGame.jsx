import React from 'react'
import '../App.css';

export default function EndGame(props) {
   const again  = () => {
    props.ChangePage("Game")
   }
    return (
        <div className='EndGame' >
            <h1 id='endTitel'>End Game</h1>
            <h1>Player Details -</h1>
            <h1>Player name : {props.Player.name}</h1>
            <h1>Player wins : {props.Player.wins}</h1>
            <h1>Player loses : {props.Player.loses}</h1>
            <h1>Player games : {props.Player.games}</h1>
            <input className='buttGame' type="button" onClick={again} value="again" /><br/>

        </div>
    )
}
