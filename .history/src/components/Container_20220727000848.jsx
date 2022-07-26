import { motion, useScroll, useSpring } from "framer-motion";
import Card from "./Card";

export default function Container({ filterData }) {
  return (
    <motion.div className='container'>
      {filterData.map((e, i) => {
        const { name, url } = e;
        const pokemonIndex = url.split("/")[url.split("/").length - 2];
        return <Card name={name} pokemonIndex={pokemonIndex} key={i} />;
      })}{" "}
    </motion.div>
  );
}
