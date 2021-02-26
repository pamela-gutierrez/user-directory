import React, { useReducer } from "react";
// import Home from "./pages/Home";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
// import Container from "./components/Container";
import TableRows from "./components/TableRows";
import TableHead from "./components/TableHead";
// import API from "../utils/API";


function App() {

  // const [users, setUsers] = useState([]);

  function capitalizeFirstLetter(string = "") {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

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
        <TableRows
          name={capitalizeFirstLetter(user.firstname) + " " + capitalizeFirstLetter(user.lastname)}
          email={users.email}
          image={users.picture.large}
          dob={users.dob}
        />
      </table>
    </div>
  );
}

export default App;
