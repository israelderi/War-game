import React, {useState} from 'react'
import './App.css';
import Header from './Mycomponents/Header';
import HomeGame from './Mycomponents/HomeGame';
import Game from './Mycomponents/Game';
import EndGame from './Mycomponents/EndGame';
import swal from 'sweetalert';

const pages = {
HomeGame: "HomeGame",
Game: "Game",
EndGame: "EndGame" 
}

function App() {

const [currentPage, setcurrentPage] = useState(pages.HomeGame);

const [Player, setPlayer] = useState(
{name: '', wins: 0, loses: 0, games:0});
 
const setPlayerName = (name) => {
  setPlayer ({
    name: name,
    wins: Player.wins,
    loses: Player.loses,
    games: Player.games
     })
}
const setPlayerScore = (t,f) => {
  if (t){
  setPlayer ({
    name: Player.name,
    wins: Player.wins + 1,
    loses: Player.loses,
    games: Player.games + 1
     })
} else{
  setPlayer ({
    name: Player.name,
    wins: Player.wins,
    loses: Player.loses + 1,
    games: Player.games + 1
     })
}
}


const ChangePage = (PageName) => setcurrentPage(PageName);
const switchPage = () => {
  switch (currentPage) {
    case pages.HomeGame:
      return <HomeGame setPlayerName = {setPlayerName} ChangePage = {ChangePage} />
      break;

    case pages.Game:
      return <Game Player = {Player} setPlayerScore = {setPlayerScore} ChangePage = {ChangePage}/>

      case pages.EndGame:
        return <EndGame Player ={Player} ChangePage = {ChangePage}/>
  
    default:
      break;
  }
}
  

  return (
    <div className="App">
      <Header />
      {switchPage()}
    </div>
  );
}

export default App;
