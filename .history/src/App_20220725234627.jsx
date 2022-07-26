import { useEffect, useState } from "react";
import "./css/style.css";
import img from "./assets/img.png";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(true);
  const [inputText, setInputText] = useState("");
  const [limit, setLimit] = useState();

  useEffect(() => {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=20";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res.results));

    isLoading(false);
  }, []);

  function onChange(e) {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  }

  return (
    <>
      <main>
        <img src={img} alt='img' />
        {loading ? (
          <div className='loader'> </div>
        ) : (
          <div className='loader'> </div>
        )}
      </main>
    </>
  );
}
