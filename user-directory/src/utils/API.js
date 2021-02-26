import axios from "axios";

export default {
    getEmployees: function () {
        return new Promise((resolve, reject) => {
            axios.get("https://randomuser.me/api/?results=15").then((res) => {
                const employees = res.data.results;
                const results = employees.map((employee) => {
                    return {
                        firstname: employee.name.first,
                        lastname: employee.name.last,
                        email: employee.email,
                        image: employee.picture.large,
                        dob: employee.dob
                    };
                });
                resolve(results);
            }).catch((err) => reject(err));
        });
    }
};