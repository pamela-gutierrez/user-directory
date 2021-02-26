import React from "react";
// import App from "../../App.js"

function TableRows(props) {
    return (
        <tbody>
            <tr>
                {/* Image */}
                <th scope="row">1</th>
                <td>{props.image}</td>
            </tr>
            <tr>
                {/* Name */}
                <th scope="row">2</th>
                <td>{props.name}</td>
            </tr>
            <tr>
                {/* Phone */}
                <th scope="row">3</th>
                <td>102 309 0349</td>
            </tr>
            <tr>
                {/* Email */}
                <th scope="row">3</th>
                <td>{props.email}</td>
            </tr>
            <tr>
                {/* Email */}
                <th scope="row">3</th>
                <td>{props.email}</td>
            </tr>
        </tbody>
    )
}

export default TableRows;