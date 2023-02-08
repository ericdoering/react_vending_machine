import React from "react";
import { BrowserRouter, Route} from "react-router-dom" 
import { Switch } from 'react-router-dom';
import VendingMachine from "./VendingMachine";
import Reeses from "./Reeses";
import Skittles from "./Skittles";
import Twizzlers from "./Twizzlers";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <VendingMachine />
        </Route>
        <Route path="/Reeses">
          <Reeses />
        </Route>
        <Route path="/Skittles">
          <Skittles />
        </Route>
        <Route path="/Twizzlers">
          <Twizzlers />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
