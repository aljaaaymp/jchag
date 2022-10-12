import './App.css';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import History from './components/History';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}


