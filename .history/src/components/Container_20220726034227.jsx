export default function Container({filterData}) {
  return (
    <div className='container'>
      {filterData.map((e, i) => {
        const { name, url } = e;
        const pokemonIndex = url.split("/")[url.split("/").length - 2];
        return (
          <div key={i} className='card'>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`}
              alt='img'
            />
            <p style={{ color: "gray" }}> #{pokemonIndex} </p>
            <p className='name'>
              {" "}
              {name.charAt(0).toUpperCase() + name.slice(1)}{" "}
            </p>
          </div>
        );
      })}{" "}
    </div>
  );
}