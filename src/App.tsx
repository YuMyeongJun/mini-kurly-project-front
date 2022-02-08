import React from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Menus, Footer, MainBody, SignUp, SignIn } from './pages';
import './css/App.css';

const param = new URLSearchParams();
param.append('memberId', 'superadmin');
param.append('password', 'Admin1234!@#$');

axios.post('/api/login', param)
  .then((res) => {
    console.log(res)
  })
  .catch((e) => {
    console.log(e);
  })

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Menus />
      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;