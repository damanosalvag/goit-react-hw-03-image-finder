import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem/ImagegalleryItem";
import Button from "./components/Button/Button";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";

import "./App.css";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }
  async componentDidMount() {
    const response = await axios.get(
      `/?key=${
        import.meta.env.VITE_API_KEY
      }&q=yellow+flowers&image_type=photo&per_page=12`
    );
    this.setState({ images: response.data.hits }, () => {
      console.log("Componente montado");
    });
  }


  handleQuery = (qImagesList) => {
    this.setState({ images: qImagesList });
  };

  render() {
    return (
      <>
        <SearchBar
          handleQuerySet={this.handleQuery}
        />
        <Modal />
        <ImageGallery>
          <ImageGalleryItem imagesList={this.state.images}></ImageGalleryItem>
          <Button />
        </ImageGallery>
        <Loader />
      </>
    );
  }
}

export default App;
