import { useCallback, useEffect, useRef, useState } from "react";
import "./css/style.css";
import img from "./assets/img.png";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(true);
  const [inputText, setInputText] = useState("");
  const [limit, setLimit] = useState(0);

  const fetchRequest = useCallback(() => {
    setLimit(limit => limit + 20);
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res.results));
    isLoading(false);
  }, []);

  // let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
  // fetch(url)
  //   .then((res) => res.json())
  //   .then((res) => setData(res.results));

  // isLoading(false);

  console.log(limit );

  return (
    <>
      <main>
        <img src={img} alt='img' />
        {loading ? (
          <>
            <div className='loader'> </div>
            <button
              onClick={() => {
                setLimit((limit) => limit + 20);
                fetchRequest();
              }}>
              {" "}
              Load{" "}
            </button>
          </>
        ) : (
          <>
            <div className='container'>
              {" "}
              {data.map((e) => {
                const { name } = e;
                return (
                  <div className='card'>
                    <p> {e.name} </p>
                  </div>
                );
              })}{" "}
            </div>
            <button
              onClick={() => {
                fetchRequest();
              }}>
              {" "}
              Load{" "}
            </button>
          </>
        )}
      </main>
    </>
  );
}
