import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import Footer from './footer'
import Meme from './memegenerator'
function App() {
  return (
    <div>
       <Header />
       <Meme />
       <Footer />
    </div>
       
  );
}

export default App;
