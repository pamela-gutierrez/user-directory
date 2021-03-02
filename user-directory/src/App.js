import React, { useEffect, useState } from "react";
// import Home from "./pages/Home";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
// import Container from "./components/Container";
import TableRows from "./components/TableRows";
// import TableHead from "./components/TableHead";
import API from "./utils/API.js";


function App() {

  const [employees, setEmployees] = useState({ originalArr: [], filteredArr: [] });
  // const [search, setSearch] = useState("");
  // const [direction, setDirection] = useState("");
  // const [col, setCol] = useState()

  useEffect(() => {
    loadEmployees();
  }, [])

  function loadEmployees() {
    API.getEmployees().then((employees) => {
      console.log(employees)
      setEmployees({ ...employees, originalArr: employees, filteredArr: employees })
    })
  }

  function handleSearch(event) {
    var searchEmployees = event.target.value
    const filteredArr = employees.originalArr.filter(employee => employee.firstname.indexOf(event.target.value) !== -1)
    setEmployees({ ...employees, filteredArr: filteredArr })
  }

  function sortEmployeesByName() {
    const sortEmployees = employees.originalArr.sort((a, b) => {
      const firstEmp = a.firstname.toUpperCase();
      const nextEmp = b.firstname.toUpperCase();
      if (firstEmp < nextEmp) return -1;
      else if (firstEmp > nextEmp) return 1;
      return 0;
    });
    console.log(sortEmployees)
    setEmployees({ ...employees, filteredArr: sortEmployees });
  }



  function capitalizeFirstLetter(string = "") {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // if (!employees) {
  //   return (
  //     <p>Please wait.</p>
  //   )
  // } else {
  //   console.log(employees)


  return (
    <div>
      <Header />
      <SearchForm handleSearch={(event) => handleSearch(event)} />
      <table className="table table-striped">
        {/* <th scope="row"></th> */}
        {/* <TableHead /> */}
        <thead>
          <tr>
            {/* <th scope="col">Image</th> */}
            <th scope="col" onClick={() => sortEmployeesByName()}>Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          {employees.filteredArr.map((employee, index) => {
            return (
              <TableRows
                name={capitalizeFirstLetter(employee.firstname) + " " + capitalizeFirstLetter(employee.lastname)}
                email={employee.email}
                phone={employee.phone}
                // image={employee.picture.thumbnail}
                dob={employee.dob}
              />
              // <div><p>{employee.firstname}</p></div>
            )
          })}
        </tbody>
      </table>

    </div>
  );
}


export default App;
