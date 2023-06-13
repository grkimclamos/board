import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "./components/Board/Board";
import BoardWrite from './components/BoardWrite/BoardWrite';
import BoardView from './components/BoardView/BoardView';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';



const App = () => {
  return (
  <RecoilRoot>
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Board/>} />
      <Route path="/BoardWrite" element={<BoardWrite/>} />
      <Route path="/BoardView/:id" element={<BoardView/>} />
     
    </Routes>
  </BrowserRouter>
 
  
  </RecoilRoot>
  );
}

export default App;
