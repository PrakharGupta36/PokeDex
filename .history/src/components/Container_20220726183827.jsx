import { useEffect, useState } from "react";
import Card from "./Card";

export default function Container({ filterData }) {
  let [types, setTypes] = useState();

  async function getAllTypes() {
    for (let i = 0; i < 18; i++) {
      let url = "https://pokeapi.co/api/v2/type/" + (i + 1);
      let response = await fetch(url);
      let responseAsJson = await response.json();
    }
  }

  useEffect(() => {
    getAllTypes();
  }, []);

  return (
    <div className='container'>
      {filterData.map((e, i) => {
        const { name, url } = e;
        const pokemonIndex = url.split("/")[url.split("/").length - 2];
        return <Card name={name} pokemonIndex={pokemonIndex} key={i} />;
      })}{" "}
    </div>
  );
}
