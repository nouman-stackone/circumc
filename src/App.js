import "./App.css";
import { useState } from "react";
import HomeScreen from "./HomeScreen";
import ContactScreen from "./ContactScreen";

function App() {
  const [screen, setScreen] = useState("home");

  if (screen === "home")
    return (
      <div className="cntner pt-12">
        <HomeScreen setScreen={setScreen} />
      </div>
    );
  if (screen === "contact")
    return (
      <div className="cntner pt-12">
        <ContactScreen setScreen={setScreen} />
      </div>
    );
}

export default App;
