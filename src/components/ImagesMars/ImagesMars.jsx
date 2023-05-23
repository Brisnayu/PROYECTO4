import "./ImagesMars.css";

import { v4 as uuidv4 } from "uuid";

const ImagesMars = ({ selectButton, infoMars }) => {
  uuidv4();

  return (
    <div className="img-mars">
      {selectButton === "All"
        ? infoMars.map((item) => (
            <div key={uuidv4()}>
              <img
                src={item.img_src}
                alt={item.camera.full_name}
                loading="lazy"
              />
            </div>
          ))
        : infoMars
            .filter((item) => item.camera.name === selectButton)
            .map((photosFilter) => (
              <div key={uuidv4()}>
                <img
                  src={photosFilter.img_src}
                  alt={photosFilter.camera.full_name}
                  loading="lazy"
                />
              </div>
            ))}
    </div>
  );
};

export default ImagesMars;
