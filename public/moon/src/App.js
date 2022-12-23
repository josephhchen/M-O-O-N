import React from 'react';
import Navbar from './Components/navbar';

function App() {
  return (  
    <React.Fragment> 
      <Navbar />
    </React.Fragment>
  );
}
//React fragment allows us to export different files without having to code everything in app.js 

export default App;