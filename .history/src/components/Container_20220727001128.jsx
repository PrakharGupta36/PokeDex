import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Card from "./Card";

export default function Container({ filterData }) {
  const [scroll, setScroll] = useState(0);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='container'>
        {filterData.map((e, i) => {
          const { name, url } = e;
          const pokemonIndex = url.split("/")[url.split("/").length - 2];
          return <Card name={name} pokemonIndex={pokemonIndex} key={i} />;
        })}{" "}
      </motion.div>
    </AnimatePresence>
  );
}
