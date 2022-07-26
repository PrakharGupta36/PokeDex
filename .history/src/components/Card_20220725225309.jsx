import { useEffect, useState } from "react";

export default function Card({ i, name, url }) {
  const [data, setData] = useState({});

  console.log(url)

  return (
    <div className='card' key={i}>
      <p className='name' style={{ fontWeight: "bold" }}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </p>
    </div>
  );
}
