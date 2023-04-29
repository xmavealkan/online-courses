import "./App.css";
import Navbar from "./components/Navbar";
// import {Route} from "react-router-dom";
import Aside from "./components/Aside";
const App = () => {
  const newsItems = ["Новость 1", "Новость 2", "Новость 3"];

  return (
    <div>
      <Navbar />
      <Aside title="Последние новости" items={newsItems} />
    </div>
  );
};

export default App;
