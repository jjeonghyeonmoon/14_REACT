import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


function PokemonDetails() {
  const { id } = useParams(); // ✅ URL에서 ID 가져오기
    const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.error("데이터 불러오기 오류:", error));
  }, [id]);

  if (!pokemon) return <p>잠시만 기다려 주세요 ㅎㅎㅎㅎ 데이터 로딩중...</p>;

  return (
    <div className="pokemon-container">
        <h2>{pokemon.name.toUpperCase()} (#{pokemon.id})</h2>
        <img src={pokemon.sprites?.front_default} alt={pokemon.name} 
        style={{
        width: "400px",  
        height: "auto",    
        margin: "20px auto",
        display: "block",
        borderRadius: "20px", 
        boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)" 
    }}
    />
        <p><strong>키:</strong> {pokemon.height / 10}m , <strong>무게:</strong> {pokemon.weight / 10}kg</p>
        <p><strong>타입:</strong> {pokemon.types?.map((t) => t.type.name).join(", ")}</p>
        <p><strong>🔥능력🔥:</strong> {pokemon.abilities?.map((a) => a.ability.name).join(", ")}</p>
        <Link to="/" className="back-button">⬅ 돌아가기</Link>
    </div>
  );
}

export default PokemonDetails;
