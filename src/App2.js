import React from 'react';
import Wrapper from './pages/Wrapper';
import Header from './pages/Header';
import Main from './pages/Main';
import Sub01 from './pages/Sub01';
import Sub02 from './pages/Sub02';
import Sub03 from './pages/Sub03';
import Sub04 from './pages/Sub04';
import Board from './pages/Board';
import Footer from './pages/Footer';
import { Route, Routes } from 'react-router-dom';
import MainContentData from './pages/MainContentData'
import Detail from './pages/Detail';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './css/basic.scss';



const url = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(url);
      setUser(res.data);
    }
    getData();
  }, [])
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<MainContentData user={user} />} />
        <Route path='/sub04' element={<Sub04 user={user} />} />
        <Route path='/detail/:id' element={<Detail user={user} />} />
      </Routes>
    </Wrapper>
  )
}

export default App;