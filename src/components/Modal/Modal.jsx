import React, { Component } from "react";
import { motion } from "framer-motion";
import style from "./Modal.module.css";

class Modal extends Component {
  render() {
    const { onModal, largeImageUrl, handleStateModal } = this.props;
    return (
      <>
        {onModal ? (
          <div
            className={style["overlay"]}
            onClick={() => handleStateModal("showModal", false)}
          >
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <div className={style["modal"]}>
                <img
                  src={largeImageUrl}
                  alt="large image"
                  className={style["modal-content"]}
                />
              </div>
            </motion.div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Modal;
