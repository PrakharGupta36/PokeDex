import { useState } from "react";
import "./css/style.css";
import img from "./assets/img.png";

export default function App() {
  const [data, setData] = useState([]);

  async function getData() {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=898";
    let response = await fetch(url);
    let responseAsJson = await response.json();

    setData(responseAsJson.results);
  }

  getData();

  return (
    <>
      <main>
        <img src={img} alt='img' />
        <div className='container'>
          {data.map((e, i) => {
            const { name } = e;
            return (
              <div className='card' key={i}>
                <img
                  loading='lazy'
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    i + 1
                  }.png`}
                  alt='img'
                />
                <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
