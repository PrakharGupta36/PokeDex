


export default function Card({ name, pokemonIndex }) {
  return (
    <div className='card'>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`}
        loading='lazy'
        alt='img'
      />
      <p style={{ color: "gray" }}> #{pokemonIndex} </p>
      <p className='name'> {name.charAt(0).toUpperCase() + name.slice(1)} </p>
    </div>
  );
}
