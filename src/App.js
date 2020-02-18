import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact avatar="https://randomuser.me/api/portraits/men/84.jpg"
                name="Juan Moore" online />
      <Contact avatar="https://randomuser.me/api/portraits/men/95.jpg"
                name="Bryan Mills"/>
      <Contact avatar="https://randomuser.me/api/portraits/men/83.jpg"
                name="Norman Reyes" online />
    </div>
  );
}

export default App;
