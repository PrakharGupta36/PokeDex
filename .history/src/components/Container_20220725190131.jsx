import Card from "./Card";
import { BiSearchAlt } from "react-icons/bi";

export default function Container({ data, onChange, input }) {
  const filteredData = data.filter((el) => {
    //if no input the return the original
    if (props.input === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.text.toLowerCase().includes(props.input);
    }
  });

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
        {filteredData.map((e, i) => {
          const { name } = e;
          return <Card name={name} key={i} i={i} />;
        })}
      </div>
    </>
  );
}
