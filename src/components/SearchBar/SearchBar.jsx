import React, { Component } from "react";
import style from "./SearchBar.module.css";

class SearchBar extends Component {
  handleStateApp = (e) => {
    const { handleStateSet } = this.props;
    const { name, value } = e.target;
    handleStateSet([name], value);
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.handleStateSet("isActiveAction", true);
    this.props.handleStateSet("loadActive", true);
    if (this.props.page !== 1) {
      this.props.handleStateSet("page", 1);
    } else {
      this.props.handleGetAPI();
    }
  };
  render() {
    return (
      <header className={style["searchBar"]}>
        <form className={style["searchForm"]} onSubmit={this.handleSubmit}>
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
            onChange={this.handleStateApp}
            value={this.props.query}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
