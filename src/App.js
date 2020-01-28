import React from "react";
import "./App.css";

import { Button } from "./components/Buttons";

function App() {
  return (
    <div>
      <Button
        onClick={() => console.log("You clicked on me")}
        type="button"
        buttonStyle="btn--primary--outlined"
        buttonSize="btn--large"
      >
        Buy now
      </Button>
    </div>
  );
}

export default App;
