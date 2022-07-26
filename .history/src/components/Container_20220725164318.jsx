import Card from "./Card";
import { Suspense, lazy } from "react";

export default function Container({ data }) {
  return (
    <div className='container'>
      {data.map((e, i) => {
        const { name } = e;
        return <Suspense fallback={<div>Loading...</div>}> </Suspense> <Card name={name} key={i} i={i} />;
      })}
    </div>
  );
}
