import { useState } from "react";

export default async function App() {
  const [data, setData] = useState([]);

  let url = "https://pokeapi.co/api/v2/pokemon?limit=1000";
  let response = await fetch(url);
  let responseAsJson = await response.json();

  response.

  return (
    <>
      <div></div>
    </>
  );
}
