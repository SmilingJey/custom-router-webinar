
import { useState } from 'react';

import Home from './pages/Home';
import Login from './pages/Login';
import Settings from './pages/Settings';

function App() {
  const [url, setUrl] = useState('');
  const handleChange = (e) => setUrl(e.target.value);


  return (
    <>
      <input value={url} onChange={handleChange} />
      {url === '/home' && <Home />}
      {url === '/login' && <Login />}
      {url === '/settings' && <Settings />}
	  </>
  );
}

export default App;
