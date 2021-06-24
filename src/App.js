import React, { Component } from "react";
import "./App.css";

import store from "./redux/store";
import { REQUEST_CARD } from "./redux/actions/types";

import CardType from "./typescript/CardType.tsx";
import ModalType from "./typescript/ModalType.tsx";

const action = (type, payload) => store.dispatch({ type, payload });

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="text-center">My Pokedex</h1>
        <CardType getMyPokedex={() => action(REQUEST_CARD)} />
        <ModalType getMyPokedex={(search) => action(REQUEST_CARD, search)} />
      </div>
    );
  }
}

export default App;
