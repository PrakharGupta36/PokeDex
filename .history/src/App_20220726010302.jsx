import { useEffect, useState } from "react";
import "./css/style.css";
import img from "./assets/img.png";

export default function App() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState([]);
  const [loading, isLoading] = useState(true);
  const [limit, setLimit] = useState(0);

  

  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/pokemon?offset=${limit}&limit=20`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res.results));

    isLoading(false);
  }, []);

  function onClick() {
    console.log("Hello World");
  }

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
                const { name, url } = e;

                return (
                  <div key={i} className='card'>
                    <p> {name} </p>
                  </div>
                );
              })}{" "}
              <button onClick={onClick}> Click </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}
