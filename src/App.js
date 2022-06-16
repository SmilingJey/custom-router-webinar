import { ownHistory } from './history';

import React, { useState, useContext, useEffect } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Settings from "./pages/Settings";

const RouterContext = React.createContext({ currentPath: window.location.pathname });

function Router({ children }) {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	useEffect(() => {
		return ownHistory.listen((location) => {
			setCurrentPath(location);
		});
	}, []);

  return (
    <RouterContext.Provider value={{ currentPath }}>
      {children}
    </RouterContext.Provider>
  );
}

function Route({ path, children }) {
  const { currentPath } = useContext(RouterContext);
  return currentPath === path && children;
}

function Link({ href, children }) {
	function handleClick(e) {
		e.preventDefault();
		ownHistory.pushState(href);
	}

	return (<a onClick={handleClick} href={href}>{children}</a>);
}

function App() {
  const [url, setUrl] = useState("");
  const handleChange = (e) => setUrl(e.target.value);

  return (
    <>
      <input value={url} onChange={handleChange} />
      <Link href="/home">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/settings">Settings</Link>

      <Router>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Router>
    </>
  );
}

export default App;
