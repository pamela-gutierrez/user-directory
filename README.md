# User Directory

This user directory application was made using React. It utilizes an API to populate the database with random "employees" and then allows the user to sort the data by alphabetical order or search for particular names.  It utilizes React's built-in hooks and the databse can be easily customized with any data. 

![Alt Text](bucketlist.gif)
* [Deployed Link](https://pamela-gutierrez.github.io/user-directory/)

## **Built With**
* [React](https://reactjs.org/)
* [HTML](https://developer.mozihlla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Bootstrap](https://getbootstrap.com/)
* [Git Hub](https://github.com/)
* [JavaScript](https://www.javascript.com/)
*  Git - used to track changes to code
______________________________________________________________________________
  
#### **Code Snippet**
The application is modularized into different header, search, container, and table components. We then use props to pass information between the App.js file and the various component files in order to render the application to the page. 

All components must be wrapped in a div in order to be rendered to the page. The Headers, SearchForm, and TableHeaders are defined in the first code snippet. The Header and SearchForm are components being imported from their respective folders but given than they are "dumb" components (they don't change on the page), they could easily be defind explicity rather than importing them. Importing them is merely a way of modularizing the application, making it easier to track down errors and expand. 
```
  <div>
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
        

```
This next code snippet demonstrates how information is prepared to be passed to functional components. The information defined here will then be passed to the TableRows component using React "props" to render the finished application with associated API data to the page. Given that we want to render various table rows with selected information on different employees we use the map function. 
```
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
```
______________________________________________________________________________

### **Author Links**

* **PAMELA GUTIERREZ**
- [Link to Portfolio Site](https://pamela-gutierrez.github.io/updated-portfolio/)
- [Link to Github](https://github.com/pamela-gutierrez) 
- [Link to LinkedIn](www.linkedin.com/in/pamela-gutierrez)

* **UC Berkeley Coding Bootcamp**
  
______________________________________________________________________________

#### **License**

This project is licensed under the MIT License


   