import React from "react";
// import App from "../../App.js"

function TableRows(props) {
    return (
        // <tbody>
        <tr>
            {/* Image */}
            <th scope="row"></th>
            <td>
                <img alt="employee" src={props.image} />
            </td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.image}</td>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.dob.date}</td>
        </tr>

        // </tbody>
    )
}

export default TableRows;