import { useEffect, useState } from "react";
import "./css/style.css";
import img from "./assets/img.png";

export default function App() {
  const [data, setData] = useState([]);
  const [fetchData, setFetchData] = useState([]);
  const [loading, isLoading] = useState(true);
  const [limit, setLimit] = useState(20);

  function getData() {
    setLimit((e) => e + 20);
    let url = `https://pokeapi.co/api/v2/pokemon?&limit=${limit}`;
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

  function onClick() {
    getData();
  }

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
            <div className='container'>
              {" "}
              {data.map((e, i) => {
                const { name, url } = e;
                const pokemonIndex = url.split("/")[url.split("/").length - 2];
                return (
                  <div key={i} className='card'>
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`}
                      alt='img'
                      width={ 30 }
                      
                    />
                    <p style={{ color: "gray" }}> #{pokemonIndex} </p>
                    <p className='name'>
                      {" "}
                      {name.charAt(0).toUpperCase() + name.slice(1)}{" "}
                    </p>
                  </div>
                );
              })}{" "}
              <button onClick={onClick}> Click </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}
