import React from "react";
import "./style.css";

function SearchForm() {
    return (
        <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label"></label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search" />
            </div>
        </form>

    );
}

export default SearchForm;
// table