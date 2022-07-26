import { BiSearchAlt } from "react-icons/bi";

export default function Search() {
  return (
    <div className='search'>
      <input type='text' placeholder='Search Your Pokémon' />
      <BiSearchAlt className="icon"/>
    </div>
  );
}
