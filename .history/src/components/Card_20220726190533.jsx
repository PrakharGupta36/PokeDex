import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Card({ name, pokemonIndex }) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type/1")
      .then((res) => res.json())
      .then((res) => console.log(res));
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

          <p className='name'>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
        </div>
      </Link>
    </article>
  );
}
