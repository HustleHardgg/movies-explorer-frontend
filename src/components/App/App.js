import "./App.css";
import Router from "../../router/Router";
import { Suspense } from "react";
import Preloader from "../Preloader/Preloader";


function App() {
  return (
    <div className="page">
      <Suspense fallback={<Preloader />}>
        <Router />
      </Suspense>
    </div>
  );
}

export default App;
