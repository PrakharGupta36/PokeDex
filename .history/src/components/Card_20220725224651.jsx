import { useState } from "react";

export default function Card({ i, name, url }) {
  const [data, setData] = useState({});

  useEffect(() => {
    return () => {
      effect
    };
  }, [input])

  getImages();

  return (
    <div className='card' key={i}>
      <p className='name' style={{ fontWeight: "bold" }}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </p>
    </div>
  );
}
