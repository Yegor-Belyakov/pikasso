import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import Table from "./components/table";

function App() {
  const [users, setUsers] = useState([]);
  const [filtredUsers, setFiltredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedDomens, setSelectedDomens] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
    setUsers(users);
  }, [users]);

  useEffect(() => {
    let filtered = users;
    if (search) {
      const s = search.toLowerCase();
      filtered = filtered.filter(
        (n) =>
          n.name.toLowerCase().includes(s) ||
          n.username.toLowerCase().includes(s) ||
          n.email.toLowerCase().includes(s)
      );
    }
    if (selectedDomens.length) {
      let array = [];
      filtered.forEach((n) => {
        selectedDomens.forEach((domen) => {
          const isExist = array.some((el) => el.id === n.id);
          if (n.email.includes(domen) && !isExist) {
            array.push(n);
          } else {
            // Тут можно написать логику отжима чекбокса, но в задании такой функционал не указан.
          }
        });
      });
      filtered = array;
    }

    setFiltredUsers(filtered);
  }, [users, search, selectedDomens]);

  const resetHandler = () => {
    setSearch("");
    setSelectedDomens([]);
  };

  return (
    <div className="App">
      <NavBar
        search={search}
        setSearch={setSearch}
        selectedDomens={selectedDomens}
        setSelectedDomens={setSelectedDomens}
        resetHandler={resetHandler}
      />
      <Table  filtredUsers={filtredUsers} />
    </div>
  );
}

export default App;
