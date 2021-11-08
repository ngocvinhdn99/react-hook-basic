import React, { useState } from 'react';
import './App.scss'
import PropTypes from 'prop-types';
import Hero from './components/Hero';

App.propTypes = {

};


function App(props) {
  const [count, setCount] = useState(0)

  const handleHeroClick = () => { }

  return (
    <div className="app">
      <h1>React Hook Basic</h1>

      <p>{count}</p>
      <button onClick={() => { setCount(count + 1) }}>Increase</button>

      <Hero name="Easy Frontend" onClick={handleHeroClick} />
    </div>
  );
}

export default App;