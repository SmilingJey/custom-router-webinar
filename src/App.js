
import { useState } from 'react';

import Home from './pages/Home';
import Login from './pages/Login';
import Settings from './pages/Settings';

function Route({ path, currentPath, children }) {
	return currentPath === path && children;
}

function App() {
  const [url, setUrl] = useState('');
  const handleChange = (e) => setUrl(e.target.value);

  return (
    <>
      <input value={url} onChange={handleChange} />
      <Route path="/home" currentPath={url}><Home /></Route>
		  <Route path="/login" currentPath={url}><Login /></Route>
	  	<Route path="/settings" currentPath={url}><Settings /></Route>
	  </>
  );
}

export default App;
