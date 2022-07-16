import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Contact from './Components/Contact';
import Minimal from './Components/Minimal';
import Personal from './Components/Personal';
import PersonalAlt from './Components/PersonalAlt';
import Home from './Components/Home';
import About from './Components/About';
import BlogSingle from './Components/BlogSingle';
import BlogSingleAlt from './Components/BlogSingleAlt';
import Category from './Components/Category';
import Classes from './Components/Classes';

const useScript = (src) => {
  useEffect(() => {
    const tag = document.createElement("script");
    tag.async = true;
    tag.src = src;
    document.body.appendChild(tag);

    return () => {
      document.body.removeChild(tag);
    };
  }, [src]);
};


function App() {
  useScript("./assests/js/jquery.min.js");
  useScript("./assests/js/popper.min.js");
  useScript("./assests/js/bootstrap.min.js");
  useScript("./assests/js/slick.min.js");
  useScript("./assests/js/jquery.sticky-sidebar.min.js");
  useScript("./assests/js/custom.js");

  return (
    <>
       <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="personal" element={<Personal />} />
        <Route path="minimal" element={<Minimal />} />
        <Route path="contact" element={<Contact />} />
        <Route path="personalalt" element={<PersonalAlt />} />
        <Route path="about" element={<About />} />
        <Route path="blogsinglealt" element={<BlogSingleAlt />} />
        <Route path="blogsingle" element={<BlogSingle />} />
        <Route path="category" element={<Category />} />
        <Route path="classes" element={<Classes />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
