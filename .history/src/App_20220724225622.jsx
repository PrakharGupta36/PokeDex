export default function App() {
  const response = fetch("https://pokeapi.co/api/v2/pokemon?limit=1000");
  const data = response.json();
  const result = data.result;

  return (
    <>
      <div>
        {" "}
        {result.map((e) => {
          return (
            <>
              {" "}
              <p> {e.name} </p>{" "}
            </>
          );
        })}{" "}
      </div>
    </>
  );
}
