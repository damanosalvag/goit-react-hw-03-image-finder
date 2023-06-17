import React, { Component } from "react";
import style from './ImageGalleryItem.module.css'
import { nanoid } from "nanoid";

class ImageGalleryItem extends Component {
  render() {
    const { imagesList } = this.props;
    return (
      <>
        {imagesList.map((image) => 
          (<li key={nanoid(10)} className={style["gallery-item"]}>
            <img src={image.webformatURL} alt={image.tags} className={style["gallery-item-image"]}/>
          </li>)
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
