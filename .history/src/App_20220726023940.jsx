import { useEffect, useState } from "react";
import "./css/style.css";
import img from "./assets/img.png";

export default function App() {
  const [data, setData] = useState([]);
  const [fetchData, setFetchData] = useState([]);
  const [loading, isLoading] = useState(true);

  function getData() {
    let url = `https://pokeapi.co/api/v2/pokemon?&limit=898`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res.results);
      });

    isLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(fetchData);

  return (
    <>
      <main>
        <img src={img} alt='img' />
        {loading ? (
          <>
            <div className='loader'> </div>
          </>
        ) : (
          <>
            <div className='search'>
              <input type='text' placeholder='Search Your Pokemon' />
            </div>
            <div className='container'>
              {data.map((e, i) => {
                const { name, url } = e;
                const pokemonIndex = url.split("/")[url.split("/").length - 2];
                return (
                  <div key={i} className='card'>
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`}
                      alt='img'
                    />
                    <p style={{ color: "gray" }}> #{pokemonIndex} </p>
                    <p className='name'>
                      {" "}
                      {name.charAt(0).toUpperCase() + name.slice(1)}{" "}
                    </p>
                  </div>
                );
              })}{" "}
            </div>
          </>
        )}
      </main>
    </>
  );
}
