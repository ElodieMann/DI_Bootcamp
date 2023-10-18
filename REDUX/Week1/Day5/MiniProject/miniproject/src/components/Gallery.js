import React, { useEffect, useState } from "react";
import { createClient } from "pexels";
import { useParams } from "react-router-dom";

const Gallery = () => {
  const { category } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPictures();
  }, [category]);

  const getPictures = () => {
    const client = createClient(
      "4s0OFxoSLytjxZtkzHR6Qp08PC37qUBLyTB35rEZCbpe0ff9QxjC7PrL"
    );

    client.photos
      .search({ query: category, per_page: 30 })
      .then((photos) => setPhotos(photos.photos))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <h2>{category} Pictures</h2>
      <div className="pictures">
        {photos?.map((photo) => (
          <img key={photo.id} src={photo.src.tiny} alt={photo.url} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
