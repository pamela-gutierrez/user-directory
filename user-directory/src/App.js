import React from "react";
// import Home from "./pages/Home";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
// import Container from "./components/Container";
import TableRows from "./components/TableRows";
import TableHead from "./components/TableHead";

function App() {
  return (
    <div className="container">
      <Header />
      <SearchForm />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <TableRows />
      </table>
    </div>
  );
}

export default App;
