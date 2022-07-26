import { useState } from "react";

export default function Card({ i, name, url }) {
  const [images, setImages] = useState({});

  async function getImages() {
    const fetchUrl = await fetch(url);
    const res = await fetchUrl.json();

    console.log(res.s);

    debugger;
  }

  getImages();

  return (
    <div className='card' key={i}>
      {/* <img
        src={`${url}`}
        alt='img'
      /> */}
      {/* {i < 9 ? (
        <img
          loading='lazy'
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${
            i + 1
          }.png`}
          alt='img'
        />
      ) : i >= 99 ? (
        <img
          loading='lazy'
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${
            i + 1
          }.png`}
          alt='img'
        />
      ) : (
        <img
          loading='lazy'
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${
            i + 1
          }.png`}
          alt='img'
        />
      )} */}
      <p className='number'> #{i + 1} </p>
      <p className='name' style={{ fontWeight: "bold" }}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </p>
    </div>
  );
}
