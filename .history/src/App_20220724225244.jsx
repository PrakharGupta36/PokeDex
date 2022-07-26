export default function App() {
  async function onLoad() {
     fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")

  }

  return (
    <>
      <div></div>
    </>
  );
}
