import React, { Component } from "react";
import style from "./Button.module.css";

class Button extends Component {
  handleClickPage = () => {
    const { handleStateButton, value } = this.props;
    const newValue = value + 1;
    handleStateButton("page", newValue);
    handleStateButton("isActiveAction", true);
    console.log(newValue);
  };

  render() {
    return (
      <footer className={style["load-btn-container"]}>
        {this.props.onShow ? (
          <button
            type="button"
            className={style["load-btn"]}
            onClick={this.handleClickPage}
          >
            Load more
          </button>
        ) : null}
      </footer>
    );
  }
}

export default Button;
