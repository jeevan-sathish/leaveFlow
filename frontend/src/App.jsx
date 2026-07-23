import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <button onClick={() => setName("jeevan")}>click</button>
      <h1>{name}</h1>
      <button onClick={() => setName("sathish")}>change</button>
    </div>
  );
};

export default App;
