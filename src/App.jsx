
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import  {Route, Routes} from 'react-router-dom'
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import PageNotFound from "./Routes/PageNotFound";
import { Pagination } from 'antd';

function App() {

  return (
    <div className="App">        
        <Navbar/> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/index.html" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home/dentist/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
          <Pagination defaultCurrent={1} total={30} />
        <Footer/>
      </div>
  );
}

export default App;
