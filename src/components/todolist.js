import React, { useState, useEffect } from 'react';
import { Listitem } from './listitem';

export function Todolist() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch('https://dummyjson.com/todos');
    const data = await response.json();
    console.log(data)
    setData(data.todos);
  }

  return (
    <div>
      {data.map((item) => (
        <Listitem key={item.id} {...item}/>
      ))}
    </div>
  );
}
