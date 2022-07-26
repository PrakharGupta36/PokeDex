import { useEffect, useState } from "react";

export default function Card({ i, url }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      {" "}
      {data === null ? (
        <div className='loader'> </div>
      ) : (
        <div className='card' key={i}>
          <img src={data.sprites.front_default} alt='img' loading='lazy' />
          <p className='name' style={{ fontWeight: "bold" }}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </p>
        </div>
      )}{" "}
    </>
  );
}
