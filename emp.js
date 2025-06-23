let Employees = [
    { E_id: 1, E_name: 'Shree', Department: 'IT',salary: 20000},
    { E_id: 2, E_name: 'Priya', Department: 'EC',salary:25000},
    { E_id: 3, E_name: 'Soham', Department: 'Civil',salary:35000},
    { E_id: 4, E_name: 'Krina', Department: 'Ic',salary:45000},
    { E_id: 5, E_name: 'Pulkit', Department: 'Environment',salary:40000},
    { E_id: 6, E_name: 'Rohan', Department: 'Networking',salary:50000},
];
    

function renderTable() {
    const tbody = document.getElementById("employeeTableBody");
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const sortOrder = document.getElementById("sortSelect").value;

    let filteredEmployees = Employees.filter(emp =>
        emp.E_name.toLowerCase().includes(searchValue)
    );


    if (sortOrder === "Ascending")
    {
        filteredEmployees.sort ((a,b) => a.salary - b.salary);
    }

    else if (sortOrder === "Descending")
    {
        filteredEmployees.sort ((a,b) => b.salary - a.salary);
    }


    tbody.innerHTML = "";
    filteredEmployees.forEach((emp) => {
        const row = document.createElement("tr");

        row.innerHTML = 
        `<td> ${emp.E_id}</td>
        <td> ${emp.E_name}</td>
        <td> ${emp.salary.toLocaleString()}</td>
        <td> ${emp.Department || "_"}</td>
        <td> <button onClick = "deleteEmployee(${emp.E_id})">"Delete"</button></td>`;

        tbody.appendChild(row);
    });

}

    function deleteEmployee(E_id) {
        Employees = Employees.filter(emp => emp.E_id !== E_id);
        renderTable();
    }

renderTable();

