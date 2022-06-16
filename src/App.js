import React, { useState, useContext } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Settings from "./pages/Settings";

const RouterContext = React.createContext({ currentPath: "/" });

function Router({ currentPath, children }) {
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
    //https://developer.mozilla.org/ru/docs/Web/API/History
		window.history.pushState(null, '', href);
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

      <Router currentPath={url}>
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
