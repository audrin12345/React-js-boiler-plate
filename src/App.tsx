// Filename - App.js

import { useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
  Link,
} from "react-router-dom";
import context from './context/context'
import DynamicComponentsData from './stubs/DynamicComponentsData';

function App() {
  const [title, setTitle] = useState<string>();

	return (
    <context.Provider value={{title, setTitle}}>
      <div className="App">
              <h1>Header</h1>
              <Router>
                  <div>
                      <div>
                          {
                              DynamicComponentsData.map((item, index) => {
                                  return <div key={index}><Link to={item.route} >{item.title}</Link></div>
                              })
                          }
                      </div>
                      <div>
                          {
                              DynamicComponentsData.map((item, index) => {
                                  return <Routes>
                                    <Route  key={index} path={item.route} element={item.component} />
                                  </Routes>
                              })
                          }
                      </div>
                  </div>
              </Router>
          </div> 
    </context.Provider>
	);
}

export default App;
