import { useEffect, useState } from "react";

export default function Card({ i, name, url }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    {data === null ? <div> </div>}

    <div className='card' key={i}>
      <p className='name' style={{ fontWeight: "bold" }}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </p>
    </div>
  );
}
