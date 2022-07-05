import React, {useState} from 'react'
import swal from 'sweetalert';


export default function Homegame(props) {
    
    const[name, setname] = useState('');
    const StartGame = () => {
        if (name != ''){
            props.setPlayerName(name)
            props.ChangePage("Game")
            swal("Successfully!", "The game starts now!", "success");
        }
        else{
            swal("Oops!", "you Must enter value!", "error");
        }
     }
  return (
    <div className='HomeGame' >
        <h1>You're ready for war ?</h1>
        <input className='startName' type="text" onChange={event => setname(event.target.value)} placeholder='Enter your name' /> <br/>
        <br/><button className='startGame' onClick={StartGame}>Start</button>
    </div>
  )
}
