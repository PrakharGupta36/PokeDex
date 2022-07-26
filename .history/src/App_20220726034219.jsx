import { useEffect, useState } from "react";
import "./css/style.css";
import { BiSearchAlt2 } from "react-icons/bi";
import img from "./assets/img.png";
import { motion, useScroll, useSpring } from "framer-motion";
import Container from "./components/Container";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(true);
  const [filterData, setFilterData] = useState([]);

  async function getData() {
    let url = `https://pokeapi.co/api/v2/pokemon?&limit=898`;
    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res.results);
        setFilterData(res.results);

        isLoading(false);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  function onChange(e) {
    const lowerCase = e.target.value.toLowerCase();

    const filter = data.filter((dat) => {
      return dat.name.toLowerCase().includes(lowerCase);
    });

    setFilterData(filter);
  }

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <>
      <main>
        <img src={img} alt='img' />
        <div className='search'>
          <input
            onChange={onChange}
            type='text'
            placeholder='Search Your Pokemon'
          />
          <BiSearchAlt2 className='icon' />
        </div>
        {loading ? (
          <>
            <div className='loader'> </div>
          </>
        ) : (
          <>
            <motion.div className='progress-bar' style={{ scaleX }} />
            <Container />
          </>
        )}
      </main>
    </>
  );
}
