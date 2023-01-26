import React from 'react'
import '../src/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Layout from './components/Layout/Layout';

function App() {
//<Route path="/view/:id" element={<View ruta={hash} />} />
  return (
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
