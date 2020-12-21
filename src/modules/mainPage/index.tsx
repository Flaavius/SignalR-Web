import React, { Suspense } from "react";

const MainPage = React.lazy(() => import("./MainPage"));

export default () => (<Suspense fallback={(<div> Loading... </div>)}>
  <MainPage />
</Suspense>);
