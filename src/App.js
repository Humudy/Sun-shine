import { Suspense } from "react";
import Wrapper from "./components/wrapper";
import { BrowserRouter as Router } from "react-router-dom"
import routing from "./route/routing";

function App() {
  return (
    <Suspense fallback={<div />}>
      <Router>
        <Wrapper>
          {routing()}
        </Wrapper>
      </Router>
    </Suspense>
  );
}

export default App;
