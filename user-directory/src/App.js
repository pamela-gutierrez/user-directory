import React, { useEffect, useState } from "react";
// import Home from "./pages/Home";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
// import Container from "./components/Container";
import TableRows from "./components/TableRows";
import TableHead from "./components/TableHead";
import API from "./utils/API.js";


function App() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, [])

  function loadEmployees() {
    API.getEmployees().then((employees) => {
      setEmployees(employees.sort())
    })
  }

  function capitalizeFirstLetter(string = "") {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div>
      <Header />
      <SearchForm />
      <table className="table table-striped">
        {/* <th scope="row"></th> */}
        <TableHead />
        <tbody>
          {employees.map((employee, index) => {
            return (
              <TableRows
                name={capitalizeFirstLetter(employee.firstname) + " " + capitalizeFirstLetter(employee.lastname)}
                email={employee.email}
                phone={employee.phone}
                // image={employee.picture.thumbnail}
                dob={employee.dob}
              />
            )
          })}
        </tbody>
      </table>

    </div>
  );
}

export default App;
