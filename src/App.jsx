import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const App = () => {
  const [monacemi, setMonacemi] = useState([]);

  useEffect(() => {
    Axios.get('https://catfact.ninja/fact')
      .then((res) => {
        setMonacemi([res.data.fact]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const datas = monacemi.map((data, index) => (
    <h1 key={index}>{data}</h1>
  ));

  return(<div>{datas}</div>)
};

export default App;
