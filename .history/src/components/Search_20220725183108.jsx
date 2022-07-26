import { BiSearchAlt } from "react-icons/bi";

export default function Search({ onChange, text }) {
  const filteredData = data.filter((el) => {
    //if no input the return the original
    if (props.input === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.name.toLowerCase().includes(text);
    }
  });
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
