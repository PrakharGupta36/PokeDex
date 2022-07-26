import { useState } from "react";
import "./css/style.css";

export default function App() {
  const [data, setData] = useState([]);

  async function getData() {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=1000";
    let response = await fetch(url);
    let responseAsJson = await response.json();

    setData(responseAsJson.results);
  }


  getData();


  console.log(data);

  return (
    <>
      <div>
        {data.map((e) => (
          <div>
            <p> {e.name} </p>
          </div>
        ))}
      </div>
    </>
  );
}
