import { useEffect, useState } from "react";
import "./css/style.css";
import { BiSearchAlt2 } from "react-icons/bi";
import img from "./assets/img.png";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(true);
  const [filterData, setFilterData] = useState([]);

  async function getData() {
    let url = `https://pokeapi.co/api/v2/pokemon?&limit=898`;
    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res.results);
        setFilterData(res.results);

        isLoading(false);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  function onChange(e) {
    const lowerCase = e.target.value.toLowerCase();

    const filter = data.filter((dat) => {
      return dat.name.toLowerCase().includes(lowerCase);
    });

    setFilterData(filter);
  }

  return (
    <>
      <main>
        <img src={img} alt='img' />
        <div className='search'>
          <input
            onChange={onChange}
            type='text'
            placeholder='Search Your Pokemon'
          />
          <BiSearchAlt2 className='icon' />
        </div>
        {loading ? (
          <>
            <div className='loader'> </div>
          </>
        ) : (
          <>
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
          </>
        )}
      </main>
    </>
  );
}
