import React, { useState } from "react";
import data from "./data.json";
import Loader from "./loader";
import Logo from "../img/Platzi.png";

// npm i --save-dev --save-exact file-loader para imagenes o videos
import "../stylus/main.styl";

function App() {
  const [loaderList, setLoaderList] = useState([]);

  const handleClick = () => {
    setLoaderList(data.loaders);
  };

  return (
    <div>
      <img src={Logo} alt="Logo" />
      Que linda aplicación hecha en React.js
      <p className="stylus">Hola</p>
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
