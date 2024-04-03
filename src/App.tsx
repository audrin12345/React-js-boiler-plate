// Filename - App.js

import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import testcontext from './context/testcontext'


function App() {
  const [title, setTitle] = useState<string>();
	return (
    <testcontext.Provider value={{title, setTitle}}>
      <Router>
        <Routes>
          <Route path="/" element={<Home title="Welcome Home" />} />
          <Route path="/about" element={<About title='Welcome About' />} />
        </Routes>
      </Router>
    </testcontext.Provider>
	);
}

export default App;
