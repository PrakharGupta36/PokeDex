export default async function App() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000");
  const data = await response.json();

  return (
    {}
    <>
      <div></div>
    </>
  );
}
