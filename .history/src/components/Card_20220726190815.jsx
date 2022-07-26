import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Card({ name, pokemonIndex }) {
  let [dogImage, setDogImage] = useState(null);

  // 3. Create out useEffect function
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => setDogImage(data.message));
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
