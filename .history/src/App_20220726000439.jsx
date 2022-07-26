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

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setLimit(limit => limit + 20);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      console.log(goingUp, currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                const { name } = e;
                return (
                  <div className='card'>
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
