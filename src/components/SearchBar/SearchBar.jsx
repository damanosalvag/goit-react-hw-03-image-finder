import React, { Component } from "react";
import style from "./SearchBar.module.css";
import axios from "axios";

class SearchBar extends Component {


  handleQuery = (e) => {
    const { handleQuerySet } = this.props;
    const { name, value } = e.target;
    handleQuerySet( [name], value );
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
            onChange={this.handleQuery}
            value={this.props.query}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
