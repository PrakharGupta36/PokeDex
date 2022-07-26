import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProfilePage() {
  const typeColors = [
    { normal: "#BCBCAC" },
    { fighting: "#BC5442" },
    { flying: "#669AFF" },
    { poison: "#AB549A" },
    { ground: "#DEBC54" },
    { rock: "#BCAC66" },
    { bug: "#ABBC1C" },
    { ghost: "#6666BC" },
    { steel: "#ABACBC" },
    { fire: "#FF421C" },
    { water: "#2F9AFF" },
    { grass: "#78CD54" },
    { electric: "#FFCD30" },
    { psychic: "#FF549A" },
    { ice: "#78DEFF" },
    { dragon: "#7866EF" },
    { dark: "#785442" },
    { fairy: "#FFACFF" },
    { shadow: "#0E2E4C" },
  ];

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [stat, setStat] = useState([]);
  let { id } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  async function getData() {
    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <div className='loader'> </div>
      ) : (
        <div className='profile-container'>
          {console.log(data)}
          <div className='profile'>
            <img
              src={
                id < 650
                  ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif `
                  : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
              }
              alt='img'
            />
            <p> #{id} </p>
            <p> {data.name} </p>
            {data.types.map((e, i) => {
              return <p key={i}>{e.type.name}</p>;
            })}
            <div>
              <p>
                {" "}
                <span> Height </span> <span> {data.height / 10}m </span>{" "}
              </p>
              <p>
                {" "}
                <span> Weight </span> <span> {data.weight / 10}kg </span>{" "}
              </p>
            </div>
            <div className='abilities'>
              <p> Abilities </p>
              <div className='abilities-container'>
                {data.abilities.map((e, i) => {
                  return <p key={i}> {e.ability.name} </p>;
                })}
              </div>
            </div>
            <div className='skills'>
              <p> Stats </p>
              <div className='skills-container'>
                {data.stats.map((e, i) => {
                  const total = [];
                  total.pushe.base_stat);
                  console.log(total)
                  return (
                    <div className='stat' key={i}>
                      <p> {e.stat.name} </p> <p> {e.base_stat} </p>
                    </div>
                  );
                })}
                <div>
                  <p> Total </p> <p> {stat} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
