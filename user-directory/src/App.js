import React from "react";
// import Home from "./pages/Home";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Container from "./components/Container";
import TableRows from "./components/TableRows";

function App() {
  return (
    <div>
      <Header />
      <Container />
      <SearchForm />
      <TableRows />
    </div>
  );
}

export default App;
