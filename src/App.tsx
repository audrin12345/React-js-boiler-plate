// Filename - App.js

import { useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
  Link,
} from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import context from './context/context'
import DynamicComponentsData from './stubs/DynamicComponentsData';
import DynamicComponent from "./pages/dynamicComponents/DynamicComponent";


function App() {
  const [title, setTitle] = useState<string>();
  let dynamicComponents = DynamicComponentsData;
	return (
    <context.Provider value={{title, setTitle}}>
      <Router>
        <Routes>
          <Route path="/" element={<Home title="Welcome Home" />} />
          <Route path="/about" element={<About title='Welcome About' />} />
        </Routes>
      {/* <div className="App">
              <h1>Create Dynamic Routes And Components Demo</h1>
              <Router>
                  <div>
                      <div>
                          {
                              dynamicComponents.map((item, index) => {
                                  return <div key={index}><Link to={item.route} >{item.title}</Link></div>
                              })
                          }
                      </div>
                      <div>
                          {
                              dynamicComponents.map((item, index) => {
                                  return <Routes>
                                    <Route  key={index} path={item.route} element={<DynamicComponent title={item.title} content={item.content} />} />
                                  </Routes>
                              })
                          }
                      </div>
                  </div>
              </Router>
          </div> */}  
      </Router>
    </context.Provider>
	);
}

export default App;
