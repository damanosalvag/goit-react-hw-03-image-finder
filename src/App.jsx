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
      query: "",
      page: 1,
    };
  }
  async componentDidMount() {
    await this.handleGetAPI();
  }
  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query === this.state.query &&
      prevState.page === this.state.page
    ) {
      return;
    } else {
      await this.handleGetAPI();
    }
  }

  handleGetAPI = async () => {
    const response = await axios.get(
      `/?key=${import.meta.env.VITE_API_KEY}&q=${
        this.state.query
      }}&image_type=photo&per_page=12&page=${this.state.page}`
    );
    const dataPics = response.data.hits;
    this.setState({ images: dataPics }, () => {
      console.log("Estado Actualizado");
    });
  };

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <SearchBar
          handleQuerySet={this.handleChange}
          query={this.state.query}
        />
        <Modal />
        <ImageGallery>
          <ImageGalleryItem imagesList={this.state.images}></ImageGalleryItem>
        </ImageGallery>
        <Button handlePage={this.handleChange} value={this.state.page} />
        <Loader />
      </>
    );
  }
}

export default App;
