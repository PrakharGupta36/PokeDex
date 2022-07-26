import Card from "./Card";

export default function Container({ filterData }) {
  return (
    <div className='container'>
      {filterData.map((e, i) => {
        const { name, url } = e;
        const pokemonIndex = url.split("/")[url.split("/").length - 2];
        return <Card name={name} />;
      })}{" "}
    </div>
  );
}
