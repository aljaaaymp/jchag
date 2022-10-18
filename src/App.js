import "./App.css";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import History from "./components/History";
import Mission from "./components/Mission";
import Ministries from "./components/Ministries";
import Worship from "./components/Worship";
import Ushering from "./components/Ushering";
import Mens from "./components/Mens";
import Womens from "./components/Womens";
import Services from "./components/Services";
import Give from "./components/Give";

export default function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/history" element={<History />} />
          <Route path="/mission&vision" element={<Mission />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/ministries/worshipteam" element={<Worship />} />
          <Route path="/ministries/usherteam" element={<Ushering />} />
          <Route path="/ministries/mensteam" element={<Mens />} />
          <Route path="/ministries/womensteam" element={<Womens />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tithes&offering" element={<Give />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}
