export default function App() {
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
