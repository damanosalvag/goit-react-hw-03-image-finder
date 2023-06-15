import React, { Component } from "react";
import style from './ImageGallery.module.css'

class ImageGallery extends Component {
  render() {
    const { children } = this.props;
    return <ul className={style["gallery"]}>{children}</ul>;
  }
}

export default ImageGallery;
