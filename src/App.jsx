import { useState } from 'react';

import SpellCheckApp from './Components/SpellCheckApp/SpellCheckApp';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SpellCheckApp />
    </>
  );
}

export default App;
