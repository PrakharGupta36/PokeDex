import { useEffect, useState } from "react";
import "./css/style.css";
import img from "./assets/img.png";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(true);
  const [inputText, setInputText] = useState("");
  const [limit, setLimit] = useState();

  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res.results));

    isLoading(false);
  }, []);


  
  console.log(data);

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
