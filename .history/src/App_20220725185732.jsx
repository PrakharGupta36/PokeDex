import { useState } from "react";
import "./css/style.css";
import img from "./assets/img.png";
import { Suspense, lazy } from "react";

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

  let lowerCase = e.target.value.toLowerCase();

  const filter = data.filter((f) => {
    return f.name.toLowerCase().includes(lowerCase);
  });

  getData();

  return (
    <>
      <main>
        <img src={img} alt='img' />
        {loading ? (
          <div className='loader'> </div>
        ) : (
          <Suspense fallback={<div className='loader'> </div>}>
            {" "}
            <Container onChange={onChange} data={data} />{" "}
          </Suspense>
        )}
      </main>
    </>
  );
}
