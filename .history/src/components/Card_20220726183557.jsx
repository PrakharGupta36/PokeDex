import { Link } from "react-router-dom";

export default function Card({ name, pokemonIndex }) {
  let pokemons = [" "];

  async function getAllTypes() {
    for (let i = 0; i < 18; i++) {
      let url = "https://pokeapi.co/api/v2/type/" + (i + 1);
      let response = await fetch(url);
      let responseAsJson = await response.json();

      const pokemonInType = responseAsJson.pokemon;

      for (let j = 0; j < pokemonInType.length; j++) {
        const pokemonId = pokemonInType[j].pokemon.url
          .replace("https://pokeapi.co/api/v2/pokemon/", "")
          .replace("/", "");

        if (pokemonId <= pokemons.length && pokemons[pokemonId]) {
          pokemons[pokemonId].types.push(responseAsJson.name);
        }
      }
    }
  }

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
            {" "}
            {name.charAt(0).toUpperCase() + name.slice(1)}{" "}
          </p>
        </div>
      </Link>
    </article>
  );
}
