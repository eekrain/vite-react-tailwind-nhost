import { VechaiProvider } from "@vechaiui/react";
import "styles/tailwind.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "views/Home";

function App() {
  return (
    <VechaiProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </VechaiProvider>
  );
}

export default App;
