import { useState } from 'react';
import './App.css';

function App () {


  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);

  let style = `rgb(${one}, ${two}, ${three})`;

  const handleOneChange = (e) => {
    setOne(e.target.value);
  };
  const handleTwoChange = (e) => {
    setTwo(e.target.value);
  };
  const handleThreeChange = (e) => {
    setThree(e.target.value);
  };

  return (
    <>
      <input type="text" onChange={ handleOneChange } />
      <input type="text" onChange={ handleTwoChange } />
      <input type="text" onChange={ handleThreeChange } />
      <div style={ { backgroundColor: style } }>RESULT COLOR</div>
    </>
  );
}

export default App;
