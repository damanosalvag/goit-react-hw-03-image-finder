import React, { Component } from "react";
import style from './ImageGalleryItem.module.css'

class ImageGalleryItem extends Component {
  render() {
    const { imagesList } = this.props;
    return (
      <>
        {imagesList.map((image) => 
          (<li key={image.id} className={style["gallery-item"]}>
            <img src={image.webformatURL} alt={image.tags} className={style["gallery-item-image"]}/>
          </li>)
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
