import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Customers from "././pages/Customers/Customers";
import Favourites from "././pages/Favourites/Favourites";
import Home from "././pages/Home/Home";
import Footer from "./components/Footer/Footer"





function App() {
  return (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
  );
  }

export default App;