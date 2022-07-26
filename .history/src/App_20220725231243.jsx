import { useState } from "react";
import "./css/style.css";
import img from "./assets/img.png";
import { Suspense, lazy } from "react";

const Container = lazy(() => import("./components/Container"));

export default function App() {
  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(true);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    return () => {
      effect
    };
  }, [input])

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
          <Suspense fallback={<div className='loader'> </div>}>
            {" "}
            <Container input={inputText} onChange={onChange} data={data} />{" "}
          </Suspense>
        )}
      </main>
    </>
  );
}
