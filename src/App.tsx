// Filename - App.js

import { useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import context from './context/context'


function App() {
  const [title, setTitle] = useState<string>();
  
	return (
    <context.Provider value={{title, setTitle}}>
      <Router>
        <Routes>
          <Route path="/" element={<Home title="Welcome Home" />} />
          <Route path="/about" element={<About title='Welcome About' />} />
        </Routes>
      </Router>
    </context.Provider>
	);
}

export default App;
