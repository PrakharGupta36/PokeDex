import { useState } from "react";
import "./css/style.css";

export default function App() {
  const [data, setData] = useState([]);

  async function getData() {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=986";
    let response = await fetch(url);
    let responseAsJson = await response.json();

    setData(responseAsJson.results);
  }

  getData();

  return (
    <>
      <div>
        {data.map((e, i) => (
          <div className="container" key={ i }>
            <div>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                i + 1
              }.png`}
              alt=''
            />
            <p>
              {e.name} {i}{" "}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
