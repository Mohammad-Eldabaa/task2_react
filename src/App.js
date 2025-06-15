import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
// import HomePage from "./page/HomePage";
import pages from "./routes/routePages";

function App() {
  return (
    <Router>
      <Routes>
        {pages.map((item) => (
          <Route key={item.id} path={item.path} element={item.element}></Route>
        ))}
      </Routes>
    </Router>
  );
}

export default App;
