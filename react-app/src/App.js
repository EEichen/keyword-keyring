import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { authenticate } from "./store/session";
import Splash from "./components/splash/Splash";

function App() {
  const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(authenticate());
      setLoaded(true);
  }, [dispatch]);
  
  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar user={user}/>
      <Switch>
        <Route path="/" >
          {!user && <Splash user={user}/>}
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/" exact={true} >
          
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
