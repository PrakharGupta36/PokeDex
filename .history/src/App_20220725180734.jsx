import { useState } from "react";
import "./css/style.css";
import img from "./assets/img.png";
import { Suspense, lazy } from "react";
import Search from "./components/Seach";

const Container = lazy(() => import("./components/Container"));

export default function App() {
  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(true);

  async function getData() {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=898";
    let response = await fetch(url);
    let responseAsJson = await response.json();

    setData(responseAsJson.results);
    isLoading(false);
  }

  function onChange(e) {
    
  }

  getData();
  return (
    <>
      <main>
        <img src={img} alt='img' />
        <Search onChange={onChange} />
        {loading ? (
          <div className='loader'> </div>
        ) : (
          <Suspense fallback={<div className='loader'> </div>}>
            {" "}
            <Container data={data} />{" "}
          </Suspense>
        )}
      </main>
    </>
  );
}
