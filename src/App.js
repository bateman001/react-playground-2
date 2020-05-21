import React from 'react';
import './App.css';
import Accordian from './state-drills/Accordian';
import Slideshow from './state-drills/Slideshow';



const sections = [
  {
    title: 'Cars',
    content: 'Trucks, SUVs, hatchback'
},
{
  title: 'Boats',
  content: 'SpeadBoat, Yacht, Kayak'
},
{
  title: 'Airplanes',
  content: 'Jets, Commercial, Helicopters'
}
]

const pictures = [
  {
    id: 0,
    src: 'src/state-drills/yummy/ball.gif',
    title: 'Moving ball',
  },
  {
    id: 1,
    src: 'src/state-drills/yummy/bubblymnt.gif',
    title: 'Bubbly Mountain',
  },
  {
    id: 2,
    src: 'src/state-drills/yummy/pinkblackcircle.gif',
    title: 'Pink and Blakc Circle',
  },
  {
    id: 3,
    img: 'scr/state-drills/yummy/pinkfluff.gif',
    title: 'Pink Fluff',
  },
  {
    id: 4,
    img: 'scr/state-drills/yummy/pastelstatic.gif ',
    title: 'Pink Static',
  }
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Accordian sections = {sections}/>
      <Slideshow pictures = {pictures} />
    </div>
  );
}

export default App;
