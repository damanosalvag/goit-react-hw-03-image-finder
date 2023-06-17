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
      isActivate: false,
    };
  }
  async componentDidMount() {
    await this.handleGetAPI();
  }
  async componentDidUpdate(prevProps, prevState) {
    if (this.state.isActivate) {
      if (
        prevState.query === this.state.query &&
        prevState.page !== this.state.page
      ) {
        await this.handleGetAPI();
      } else if (prevState.query !== this.state.query) {
        this.setState({ page: 1 });
      } else {
        return;
      }
    }
  }

  handleGetAPI = async () => {
    const response = await axios.get(
      `/?key=${import.meta.env.VITE_API_KEY}&q=${
        this.state.query
      }}&image_type=photo&per_page=12&page=${this.state.page}`
    );
    const dataPics = response.data.hits;
    if (this.state.page === 1) {
      this.setState({ images: dataPics }, () => {
        console.log("Estado Actualizado una vez");
      });
    } else {
      this.setState(
        (prevState) => ({
          images: [...prevState.images, ...dataPics],
        }),
        () => {
          console.log("Estado Actualizado mas de una vez");
        }
      );
    }
    this.setState({ isActivate: false });
  };

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <SearchBar
          handleStateSet={this.handleChange}
          handleGetAPI={this.handleGetAPI}
          query={this.state.query}
          page={this.state.page}
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
