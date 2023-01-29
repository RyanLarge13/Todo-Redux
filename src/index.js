import { createRoot } from "react-dom/client";
import MainView from "./components/main-view/main-view";

import "./index.scss";

function App() {
  return <MainView />;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
