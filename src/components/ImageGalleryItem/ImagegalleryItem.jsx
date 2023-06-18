import React, { Component } from "react";
import style from "./ImageGalleryItem.module.css";
import { nanoid } from "nanoid";

class ImageGalleryItem extends Component {
  render() {
    const { imagesList, isRender, handleStateImage } = this.props;
    return (
      <>
        {isRender
          ? null
          : imagesList.map((image) => (
              <li key={nanoid(10)} className={style["gallery-item"]}>
                <img
                  src={image.webformatURL}
                  alt={image.tags}
                  onClick={() => {
                    handleStateImage("urlModal", image.largeImageURL);
                    handleStateImage("showModal", true);
                  }}
                  className={style["gallery-item-image"]}
                />
              </li>
            ))}
      </>
    );
  }
}

export default ImageGalleryItem;
