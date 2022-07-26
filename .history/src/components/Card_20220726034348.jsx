export default function Card() {
  return (
    <div key={i} className='card'>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`}
        alt='img'
      />
      <p style={{ color: "gray" }}> #{pokemonIndex} </p>
      <p className='name'> {name.charAt(0).toUpperCase() + name.slice(1)} </p>
    </div>
  );
}