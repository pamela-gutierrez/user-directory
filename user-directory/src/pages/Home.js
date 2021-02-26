import React, { useEffect, useState } from "react";
import API from "../utils/API";


function Home() {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadEmployees();
    }, []);

    // function capitalizeFirstLetter(string = "") {
    //     return string.charAt(0).toUpperCase() + string.slice(1);
    //   }

    // function searchEmployees(){

    // } 

    // // function sortEmployeesByName(){

    // }

    // function loadEmployees() {
    //     API.getUsers()
    //         .then(users) => {
    //         setUsers(user.sort)
    //     }
    // }

}



