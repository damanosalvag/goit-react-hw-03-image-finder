import React, { Component } from "react";
import style from "./Button.module.css";

class Button extends Component {
  handleClickPage = () => {
    const { handlePage, value } = this.props;
    const newValue = value + 1;
    handlePage('page', newValue);
    handlePage("isActivate", true);
    console.log(newValue);
  };

  render() {
    return (
      <footer className={style["load-btn-container"]}>
        <button
          type="button"
          className={style["load-btn"]}
          onClick={this.handleClickPage}
        >
          Load more
        </button>
      </footer>
    );
  }
}

export default Button;
