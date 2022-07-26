import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Card({ name, pokemonIndex }) {
  const [data, setData] = useState();

  async function getAllTypes() {
    for (let i = 1; i < 19; i++) {
     et url = 'https://pokeapi.co/api/v2/type/' + (i + 1)
        let response = await fetch(url)
        let responseAsJson = await response.json()

      setData(json);
    }
  }

  useEffect(() => {
    getAllTypes();
  }, [data]);

  console.log(data);

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

          <p className='name'>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
        </div>
      </Link>
    </article>
  );
}
