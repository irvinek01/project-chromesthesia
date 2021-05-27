import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./util/auth";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import Navigation from "./components/Navigation";
import IframesPage from "./components/IframesPage";
import SignupPage from "./components/SignupPage";
import PrivateRoute from "./components/PrivateRoute";
import UserPage from "./components/UserPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/iframespage">
            <IframesPage />
          </Route>
           
          <PrivateRoute path="/myprofile">
            <UserPage />
          </PrivateRoute>
          <Route path="/signup">
            <SignupPage />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
