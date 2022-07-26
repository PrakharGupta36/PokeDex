import { useCallback, useEffect, useRef, useState } from "react";
import "./css/style.css";
import img from "./assets/img.png";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(true);
  const [inputText, setInputText] = useState("");
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res.results));
    isLoading(false);

    data.map((e) => {});
  }, []);

  return (
    <>
      <main>
        <img src={img} alt='img' />
        {loading ? (
          <>
            <div className='loader'> </div>
          </>
        ) : (
          <>
            <div className='container'>
              {" "}
              {data.map((e, i) => {
                const { name } = e;
                return (
                  <div key={i} className='card'>
                    <p> {e.name} </p>
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
