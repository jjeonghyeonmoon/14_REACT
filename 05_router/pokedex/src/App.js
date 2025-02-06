import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import PokemonDetails from "./PokemonDetails";
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  return (
      <Routes>
        {/* 🔹 메인 페이지 (검색창 + 포켓몬 리스트) */}
        <Route path="/" element={<Home pokemonList={pokemonList} setPokemonList={setPokemonList} />} />
        
        {/* 🔹 포켓몬 상세 페이지 (검색창 없음) */}
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
  );
}

export default App;
