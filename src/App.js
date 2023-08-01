import {useState} from 'react';
let f=0;


export default function Game(){
  return(
    <>
      <Nav />
      <div className='game'>
        <div className='board'>
          <Board />     
        </div>
        <div className='info'>
          <ol></ol>
        </div>
      </div>
      <Fot />
      </>
  )
}



function Nav(){
  return(
    <>
      <div className='nav'>
        <img className='im' src='tic.jpg' alt='logo'></img>
        <p className='name hover-underline-animation'>TIC-TAC-TOE</p>
        <a className='ghh' href='https://github.com/Raycurve' target={'_blank'}><img className='gh' src='github.png' alt='github'></img></a>
      </div>
    </>
  )
}
function Fot(){
  return(
    <>
      <div className='foo'>
        <p className='by'>Made with React by <span className='ray'><a className='hover-underline-animation' href='https://github.com/Raycurve' target={'_blank'}>Raycurve</a></span></p>
      </div>
    </>
  )
}

function Square({val, clickhua}) {
  const [textColor, setTextColor] = useState('fa6400');
  const [opa,setopa] = useState('10%');
  function col() {
    if(!f){
      setTextColor(textColor==='fa6400'? '#060d0f':'fa6400');
      setopa('100%')
    }
  }
  return (
  <button style={{ color:textColor , opacity:opa}} className="button-5 " onClick={()=> {clickhua(); col()}}>
    {val} 
    </button>
  );
  
}

function Board(){
  const [arr, setArr] = useState(Array(9).fill("."));
  const [xmov, setXmov] = useState(true);
  function handCl(i){
    const arrr = arr.slice();
    if(arrr[i]!== '.' || calculateWinner(arr)){
      return;
    }
    if(xmov === true)
      arrr[i] = 'X';
    else
      arrr[i] = 'O';
    
    setArr(arrr);
    setXmov(!xmov);
 
  }


  const w = calculateWinner(arr);
    let status;
    if(w && w!=="Both"){
      status = "Winner is " + w;
      f=1;
    }
    else if(w==="Both"){
      f=1;
      status = 'Draw';
      console.log("yay"+status);
    }
    else
      status = (xmov?'X':'O')+"'s turn";

    console.log(status);


  return(
    <>
    <div
      className="status"> {status}
    </div>
    <div className="row">
      <Square val={arr[0]} clickhua={() => handCl(0)} />
      <Square val={arr[1]} clickhua={() => handCl(1)} />
      <Square val={arr[2]} clickhua={() => handCl(2)} />
     
    </div>
    <div  className="row">
      <Square val={arr[3]} clickhua={() => handCl(3)} />
      <Square val={arr[4]} clickhua={() => handCl(4)} />
      <Square val={arr[5]} clickhua={() => handCl(5)} />
    </div>
    <div  className="row">
      <Square val={arr[6]} clickhua={() => handCl(6)} />
      <Square val={arr[7]} clickhua={() => handCl(7)} />
      <Square val={arr[8]} clickhua={() => handCl(8)} />
    </div>
    
 
    
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    // console.log(lines.length);
    const [a, b, c] = lines[i];
    if (squares[a]!=='.' && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  for(let i=0;i<lines.length;i++){
    const [a, b, c] = lines[i];
    if(squares[a]==='.' || squares[b]==='.' || squares[c]==='.')
      return null;
  }
  return "Both";

}



