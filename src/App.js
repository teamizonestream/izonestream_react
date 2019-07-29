import React, { Suspense, lazy } from "react";
import { Route, Link } from "react-router-dom";

const Main = lazy(() => import("./pages/Main"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
        </ul>
        <Route exact path="/" component={Main} />
      </div>
    </Suspense>
  );
};

export default App;
