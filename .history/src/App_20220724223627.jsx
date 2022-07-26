export default function App() {
  const words = ["hello", "world", "phone", "apple", "react", "index", "words"];

  function onFocus() {
    console.log("In focus");
  }

  return (
    <>
      <div
        style={{ width: 200, height: 200, border: `1px solid black` }}
        onFocus={ onFocus }>

        </div>
    </>
  );
}
