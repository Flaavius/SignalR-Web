import React from "react";
import { getBaseApi } from "../../services/config";

import { Header } from "../../components";

const MainPage = () => {
  return (<div className="wrapper">
    <Header onData={(data) => {console.log(data)}} api={getBaseApi()} />
    <div style={{
      background: "lightgray",
      height: "110vh",
    }} />
  </div>);
};

export default MainPage;
