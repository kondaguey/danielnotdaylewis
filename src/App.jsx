import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Developer from "./pages/Developer";
import Copywriter from "./pages/Copywriter";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="grid">
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/developer' element={<Developer />} />
            <Route path='/copywriter' element={<Copywriter />} />
          </Routes>
        </Router>
      <Footer />
    </div>
  )
};

export default App;