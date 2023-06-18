import React, { Component } from "react";
import style from "./Modal.module.css";

class Modal extends Component {
  render() {
    const { onModal, largeImageUrl, handleStateModal } = this.props;
    return (
      <>
        {onModal ? (
          <div className={style["overlay"]}>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/fluency/48/cancel.png"
              alt="cancel"
              onClick={() => handleStateModal("showModal", false)}
              className={style["close-btn"]}
            />
            <div className={style["modal"]}>
              <img src={largeImageUrl} alt="" />
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Modal;
