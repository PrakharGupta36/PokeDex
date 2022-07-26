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
  const [moreData, setMoreData] = useState();
  const [loading, setLoading] = useState(true);
  const [evolutions, setEvolutions] = useState({});
  let { id } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const res = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;

  async function getData() {
    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
    await fetch(res)
      .then((res) => res.json())
      .then((res) => {
        setMoreData(res);
      });

    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  let total = [];

  console.log(evolutions);

  return (
    <>
      {loading ? (
        <div className='loader'> </div>
      ) : (
        <body style={{ background: moreData.color.name }}>
          <div className='profile-container'>
            <div className='profile'>
              <img
                src={
                  id < 650
                    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif `
                    : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
                }
                alt='img'
              />
              <div
                className='profile-info'
                style={{ backgroundColor: "white" }}>
                <p> #{id} </p>
                <p
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}>
                  {" "}
                  {data.name}{" "}
                </p>
                <div className='types'>
                  {data.types.map((e, i) => {
                    return (
                      <p style={{ textTransform: "capitalize" }} key={i}>
                        {e.type.name}
                      </p>
                    );
                  })}
                </div>
                <div
                  className='para-info'
                  style={{ padding: ".5rem 2rem", textAlign: "center" }}>
                  <p style={{ fontWeight: "bolder" }}> Pokedex Entry </p>
                  <p style={{ color: "gray", fontWeight: "bolder" }}>
                    {moreData.flavor_text_entries[0].flavor_text}
                  </p>
                </div>
                <div className='types'>
                  <p
                    style={{
                      display: "grid",
                      placeItems: "center",
                      gap: "1rem",
                    }}>
                    <span> Height </span>
                    <span
                      style={{ background: "#f6f8fc", padding: ".5rem 2rem" }}>
                      {data.height / 10}m{" "}
                    </span>
                  </p>
                  <p
                    style={{
                      display: "grid",
                      placeItems: "center",
                      gap: "1rem",
                    }}>
                    <span> Weight </span>
                    <span
                      style={{ background: "#f6f8fc", padding: ".5rem 2rem" }}>
                      {data.weight / 10}kg
                    </span>
                  </p>
                </div>
                <div className='abilities'>
                  <p style={{ textAlign: "center" }}> Abilities </p>
                  <div className='types'>
                    {data.abilities.map((e, i) => {
                      return (
                        <p
                          style={{
                            background: "#f6f8fc",
                            padding: ".5rem 2rem",
                            textTransform: "capitalize",
                          }}
                          key={i}>
                          {e.ability.name}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div className='skills'>
                  <p s> Stats </p>
                  <div className='types'>
                    {data.stats.map((e, i) => {
                      total.push(e.base_stat);
                      return (
                        <div className='stat' key={i}>
                          <p> {e.stat.name} </p> <p> {e.base_stat} </p>
                        </div>
                      );
                    })}
                    <div>
                      <p> Total </p> <p> {total.reduce((a, b) => a + b, 0)} </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      )}
    </>
  );
}
