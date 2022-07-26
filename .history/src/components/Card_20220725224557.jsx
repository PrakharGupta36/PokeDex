import { useState } from "react";

export default function Card({ i, name, url }) {
  const [data, setData] = useState({});

  async function getImages() {
    const fetchUrl = await fetch(url);
    const res = await fetchUrl.json();

    setData(...data,{ img: res.sprites.front_default });
  }

  getImages();

  return (
    <div className='card' key={i}>
      <p className='name' style={{ fontWeight: "bold" }}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </p>
    </div>
  );
}
