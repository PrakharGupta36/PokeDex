import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Card({ name, pokemonIndex }) {
  let [types, setTypes] = useState();

  async function getAllTypes() {
    for (let i = 0; i < 18; i++) {
      let url = "https://pokeapi.co/api/v2/type/" + (i + 1);
      let response = await fetch(url);
      let responseAsJson = await response.json();

      console.log(responseAsJson);
    }
  }

  useEffect(() => {
    getAllTypes();
  }, []);

  return (
    <article>
      <Link to={`/pokemon/${pokemonIndex}`}>
        <div className='card'>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`}
            loading='lazy'
            alt='img'
          />
          <p style={{ color: "gray" }}> #{pokemonIndex} </p>

          <p className='name'>
            { name.charAt(0).toUpperCase() + name.slice(1) }
          </p>
        </div>
      </Link>
    </article>
  );
}
