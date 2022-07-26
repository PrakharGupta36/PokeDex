import { BiSearchAlt } from "react-icons/bi";

export default function Search({ onChange }) {
  return (
    <div className='search'>
      <input
        type='text'
        placeholder='Search Your Pokémon'
        onChange={onChange}
      />
      <BiSearchAlt className='icon' />
    </div>
  );
}
