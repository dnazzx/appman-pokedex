import React, { Component } from 'react'
import './App.css'
<<<<<<< Updated upstream
import ModalContent from './components/ModalContent'
import Card from './components/myCard'
=======
// import ModalContent from './components/ModalContent'
// import Card from './components/myCard'
// import HookModal from './components/HookModal'
// import HookCard from './components/HookCard'
import ModalType from './typescript/ModalType'
import CardType from './typescript/CardType'
// import store from './redux/store'
// import { Modal } from 'react-bootstrap'
>>>>>>> Stashed changes

// const COLORS = {
//   Psychic: "#f8a5c2",
//   Fighting: "#f0932b",
//   Fairy: "#c44569",
//   Normal: "#f6e58d",
//   Grass: "#badc58",
//   Metal: "#95afc0",
//   Water: "#3dc1d3",
//   Lightning: "#f9ca24",
//   Darkness: "#574b90",
//   Colorless: "#FFF",
//   Fire: "#eb4d4b"
// }

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="text-center">My Pokedex</h1>
<<<<<<< Updated upstream
          <Card/>
          <ModalContent/>
=======
          {/* <Card/> */}
          {/* <ModalContent/> */}
          {/* <ModalType/> */}
          <CardType/>
          <ModalType/>
          {/* <HookCard/> */}
          {/* <HookModal/> */}
>>>>>>> Stashed changes
      </div>
    )
  }
}

export default App
