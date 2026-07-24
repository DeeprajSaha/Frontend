import React, { useContext, useState } from "react";
import Register from "./Register";
import Login from "./Login";
import Home from "./components/Home";
import { MyStore } from "./Context/MyContex";

const App = () => {
    let { screen } = useContext(MyStore);

    return (
        <div>
            {screen === "login" && <Login />}
            {screen === "register" && <Register />}
            {screen === "home" && <Home />}
        </div>
    );
};

export default App;
