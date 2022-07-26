import { useState } from "react";
import "./css/style.css";
import img from "./assets/img.png";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(true);

  async function getData() {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=898";
    let response = await fetch(url);
    let responseAsJson = await response.json();

    setData(responseAsJson.results);
    isLoading(false);
  }

  getData();

  return (
    <>
      {loading ? <main> <div className="loader"> </div> </main> ? }
      
    </>
  );
}
