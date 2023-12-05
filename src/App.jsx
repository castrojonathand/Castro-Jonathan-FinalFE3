
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import  {Route, Routes} from 'react-router-dom'
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import PageNotFound from "./Routes/PageNotFound";
import { useGlobalContext } from "./Components/utils/global.context";
// import { useEffect, useState } from "react";



function App() {
  const { dataState } = useGlobalContext();
  // const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  // useEffect(() => {
  //   const handleResize = () => {
  //     setScreenHeight(window.innerHeight);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  // console.log("screenHeight>>", screenHeight);
  return (
    <div
      className={`${
        dataState.theme ? "" : "dark"
      } min-h-screen flex flex-col justify-between`}
    >
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home/dentist/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer className="bg-gray-300 text-center py-4" />
    </div>
  );
}

export default App;
