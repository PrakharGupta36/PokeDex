import { useState } from "react";
import "./css/style.css";

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
      <div className='container'>
        { data.map((e, i) => (
          const {}
          <div className='card' key={i}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                i + 1
              }.png`}
              alt=''
            />
            <p>{e.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
