import Card from "./Card";


export default function Container({ data }) {
  return (
    <>
      <div className='search'>
        <input
          type='text'
          placeholder='Search Your Pokémon'
          onChange={onChange}
        />
        <BiSearchAlt className='icon' />
      </div>
      <div className='container'>
        {data.map((e, i) => {
          const { name } = e;
          return <Card name={name} key={i} i={i} />;
        })}
      </div>
    </>
  );
}
