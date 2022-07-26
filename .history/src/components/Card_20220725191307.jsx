export default function Card({ i, name }) {
  return (
    <div className='card' key={i}>
      {/* <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
          i + 1
        }.gif`}
        alt='img'
      /> */}
      {i < 9 ? (
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
      )}
      <p className='number'> #{i + 1} </p>
      <p className='name' style={{ fontWeight: "bold" }}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </p>
    </div>
  );
}
