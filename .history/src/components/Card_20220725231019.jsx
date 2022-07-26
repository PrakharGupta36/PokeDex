import { useEffect, useState } from "react";

export default function Card({ i, name, url }) {
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
          <img src={data.sprites.other.home.front_default} alt='img' />
          <p className='name' style={{ fontWeight: "bold" }}>
            {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
          </p>
        </div>
      )}{" "}
    </>
  );
}
