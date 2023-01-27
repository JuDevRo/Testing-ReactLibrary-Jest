import React from 'react'
import '../src/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Layout from './components/Layout/Layout';
import Main from './containers/Main/Main';
import About from './containers/About/About';
import Projects from './containers/Projects/Projects';

function App() {
//<Route path="/view/:id" element={<View ruta={hash} />} />
  return (
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/main" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
