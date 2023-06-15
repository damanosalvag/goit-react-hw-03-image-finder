import React, { Component } from "react";
import style from "./SearchBar.module.css";
import axios from "axios";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  handleBlur = async () => {
    const response = await axios.get(
      `/?key=${import.meta.env.VITE_API_KEY}&q=${
        this.state.query
      }&image_type=photo&per_page=12`
    );
    this.props.handleQuerySet(response.data.hits);
    console.log(response.data.hits);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <header className={style["searchBar"]}>
        <form className={style["searchForm"]}>
          <button type="submit" className={style["button"]}>
            <span className={style["button-label"]}>Search</span>
          </button>

          <input
            className={style["input"]}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            value={this.state.query}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
