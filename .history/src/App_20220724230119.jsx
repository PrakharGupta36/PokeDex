import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  function getData() {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=1000";
  let response = await fetch(url);
  let responseAsJson = await response.json();

  }


  return (
    <>
      <div></div>
    </>
  );
}
