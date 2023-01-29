import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import todos from "./reducers";
import { addTodo, toggleTodo, deleteTodo } from "./actions";
import MainView from "./components/main-view/main-view";

const store = createStore(todos);
store.dispatch(addTodo("Dispatch my first action"));
store.dispatch(addTodo("Dispatch my second action"));
store.dispatch(addTodo("Dispatch my third action"));
store.dispatch(addTodo("Dispatch my fourth action"));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(3));
store.dispatch(deleteTodo(1));

console.log(store.getState());

function App() {
  return <MainView />;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
