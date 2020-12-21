import React from "react";
import { getBaseApi } from "../../services/config";

import { Header } from "../../components";

const MainPage = () => {
  return (<div className="wrapper">
    <Header api={getBaseApi()} />
    <div style={{
      background: "lightgray",
      height: "110vh",
    }} />
  </div>);
};

export default MainPage;
