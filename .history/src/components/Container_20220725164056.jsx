import Card from "./Card";

export default function Container({ data }) {
  return (
    <div className='container'>
      {data.map((e, i) => {
        const { name } = e;
        return <Card key={i} i={i} />;
      })}
    </div>
  );
}
