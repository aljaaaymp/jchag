import './App.css';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import History from './components/History';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path='/home' element={<Homepage/>}/>
          <Route path='/history' element={<History/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
