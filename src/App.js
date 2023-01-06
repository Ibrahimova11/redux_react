import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Customers from "././pages/Customers/Customers";
import Favourites from "././pages/Favourites/Favourites";
import Home from "././pages/Home/Home";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import Detail from './pages/Detail/Detail'





function App() {
  return (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path ="/details/:id" element={<Detail/>}/>
            <Route path="*" element={<NotFound />} />
            
          </Routes>
          <Footer/>
        </BrowserRouter>
  );
  }

export default App;