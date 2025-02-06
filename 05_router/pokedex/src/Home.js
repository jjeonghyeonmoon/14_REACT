import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

function Home({ pokemonList, setPokemonList }) {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
    .then((response) => response.json())
    .then((data) => setPokemonList(data.results))
    .catch((error) => console.error("데이터 불러오기 오류:", error));
    }, [setPokemonList]);

    const changeHandler = (e) => setSearchValue(e.target.value);

    const onClickHandler = () => {
    const foundPokemon = pokemonList.find(
        (pokemon) => pokemon.name === searchValue
    );

    if (foundPokemon) {
        const id = foundPokemon.url.split("/").slice(-2, -1)[0];
        navigate(`/pokemon/${id}`);
    }else (
        alert("검색하신 몬스터는 사망했습니다ㅠㅠ")
    )
};

    return (
    <div>
        <h1>문박사의 포켓몬 도감</h1>
      {/* 🔹 검색창 */}
        <input
        type="search"
        name="pokemonName"
        placeholder="포켓몬 이름을 입력하세요"
        onChange={changeHandler}
        />
        
        <button onClick={onClickHandler}>포켓몬 검색하기</button>

      {/* 🔹 포켓몬 리스트 */}
    <ul>
    {pokemonList.length === 0 ? (
    <p>포켓몬 데이터를 불러오는 중...</p>
    ) : (
    pokemonList.map((pokemon) => {
        const id = pokemon.url.split("/").slice(-2, -1)[0];
        return (
        <li key={id}>
            <Link to={`/pokemon/${id}`}>{pokemon.name} 상세보기</Link>
        </li>
    );
    })
  )}
</ul>
    </div>
  );
}

export default Home;
