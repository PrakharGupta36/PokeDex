import Card from "./Card";
import { BiSearchAlt } from "react-icons/bi";

export default function Container({ data, onChange, text }) {


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
