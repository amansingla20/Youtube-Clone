import "./App.css";
import Header from "./components/Header";
import RecommendedVideos from "./components/RecommendedVideos";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app-page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route exact path="/">
            <div className="app-page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
