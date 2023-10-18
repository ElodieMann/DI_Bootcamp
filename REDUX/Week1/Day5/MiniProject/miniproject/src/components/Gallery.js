import React, { useEffect, useState } from "react";
import { createClient } from "pexels";

const Gallery = ({ name }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const client = createClient(
      "4s0OFxoSLytjxZtkzHR6Qp08PC37qUBLyTB35rEZCbpe0ff9QxjC7PrL"
    );

    client.photos
      .search({ query: name, per_page: 30 })
      .then((photos) => setCategory(photos.photos))
      .catch((e) => console.log(e));
  }, [name]);

  return (
    <div>
      <h2>{name}</h2>
      <div className="pictures">
        {category?.map((photos) => (
          <img key={photos.id} src={photos.src.tiny} alt={photos.alt} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
