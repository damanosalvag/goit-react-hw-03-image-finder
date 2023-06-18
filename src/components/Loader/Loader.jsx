import React, { Component } from "react";
import { Puff } from "react-loader-spinner";
import style from './Loader.module.css'

class Loader extends Component {
  render() {
    return (
      <div className={style["loader"]}>
        <Puff
          height="80"
          width="80"
          radius={1}
          color="#4fa94d"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={this.props.isLoading}
        />
      </div>
    );
  }
}

export default Loader;
