import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/Login';
import DashboardPage from './pages/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
         <div>
         <Switch>
          <Route path="/welcome">
            <DashboardPage />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </div>
       </Router>
    // <div className="App">
    // <DashboardPage />
    // </div>
  );
}

export default App;
