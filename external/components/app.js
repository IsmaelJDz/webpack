import React, { useState } from "react";
import data from "./data.json";
import Loader from "./loader";

console.log(data.loaders);
function App() {
  const [loaderList, setLoaderList] = useState([]);

  const handleClick = () => {
    setLoaderList(data.loaders);
  };

  return (
    <div>
      Que linda aplicación hecha en React.js
      <ul>
        {loaderList.map(item => (
          <Loader key={item.id} {...item} />
        ))}
      </ul>
      <button onClick={handleClick}>Mostrar lo aprendido</button>
    </div>
  );
}

export default App;
