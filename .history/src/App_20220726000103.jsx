import { useEffect, useState } from "react";
import "./css/style.css";
import img from "./assets/img.png";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(true);
  const [inputText, setInputText] = useState("");
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res.results));

    isLoading(false);
  }, []);

  window.addEventListener("scroll", function () {
    if (this.scrollY > 1500) {
      setLimit(limit + 20);
    }
  });

  console.log(data);

  return (
    <>
      <main>
        <img src={img} alt='img' />
        {loading ? (
          <div className='loader'> </div>
        ) : (
          <>
            <div className='container'>
              {" "}
              {data.map((e) => {
                return <div> <p> {e.name} </p>;
              })}{" "}
            </div>
          </>
        )}
      </main>
    </>
  );
}
