import { useState } from "react";
import "./css/style.css";
import img from "./assets/img.png";

export default function App() {
  const [data, setData] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, isLoading] = useState(true);

  async function getData() {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=898";
    let response = await fetch(url);
    let responseAsJson = await response.json();

    setData(responseAsJson.results);
    isLoading(false);
  }

  async function getTypes() {
    getData();

    for (let i = 0; i < 18; i++) {
      let url = "https://pokeapi.co/api/v2/type/" + (i + 1);
      let response = await fetch(url);
      let responseAsJson = await response.json();
    }
  }

  getTypes();

  return (
    <>
      <main>
        <img src={img} alt='img' />
        {loading ? (
          <div className='loader'> </div>
        ) : (
          <div className='container'>
            {data.map((e, i) => {
              const { name } = e;
              return (
                <div className='card' key={i}>
                  {i < 9 ? (
                    <img
                      loading='lazy'
                      src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${
                        i + 1
                      }.png`}
                      alt='img'
                    />
                  ) : i >= 99 ? (
                    <img
                      loading='lazy'
                      src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${
                        i + 1
                      }.png`}
                      alt='img'
                    />
                  ) : (
                    <img
                      loading='lazy'
                      src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${
                        i + 1
                      }.png`}
                      alt='img'
                    />
                  )}
                  <p className='number'> #{i} </p>
                  <p className='name' style={{ fontWeight: "bold" }}>
                    {" "}
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </>
  );
}
