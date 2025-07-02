let Employees = [
    { E_id: 1, E_name: 'Shree', Department: 'IT', salary: 20000 },
    { E_id: 2, E_name: 'Priya', Department: 'EC', salary: 25000 },
    { E_id: 3, E_name: 'Soham', Department: 'Civil', salary: 35000 },
    { E_id: 4, E_name: 'Krina', Department: 'Ic', salary: 45000 },
    { E_id: 5, E_name: 'Pulkit', Department: 'Environment', salary: 40000 },
    { E_id: 6, E_name: 'Rohan', Department: 'Networking', salary: 50000 },
    { E_id: 7, E_name: 'Shreya', Department: 'IT', salary: 24000 },
    { E_id: 8, E_name: 'Priyanshi', Department: 'EC', salary: 27000 },
    { E_id: 9, E_name: 'Sonam', Department: 'Civil', salary: 32000 },
    { E_id: 10, E_name: 'Krishna', Department: 'Ic', salary: 47000 }
];


// department dropdown
function DepartmentDropdown() {
    const deptSelect = document.getElementById("sortDepartment");
    const departments = ["All", ...new Set(Employees.map(emp => emp.Department))];
    deptSelect.innerHTML = departments.map(dept =>
        `<option value="${dept}">${dept}</option>`
    ).join("");//it's an array method that returns new string by concatenating all of the elements in an array
}


// Render employee table with filters and sorting
function renderTable() {
    const tbody = document.getElementById("employeeTableBody");
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const sortOrder = document.getElementById("sortSelect").value;
    const selectedDepartment = document.getElementById("sortDepartment").value;
    let filteredEmployees = Employees;
    

    // Filter by department
    if (selectedDepartment !== "All") //selected Department is anything other than "All" run some filtering logic
    {
        filteredEmployees = filteredEmployees.filter(emp =>
            emp.Department.toLowerCase() === selectedDepartment.toLowerCase()
        );
    }

    
    // Filter by name
    filteredEmployees = filteredEmployees.filter(emp =>
        emp.E_name.toLowerCase().includes(searchValue)
    );


    // Sort by salary
    if (sortOrder === "Ascending") {
        filteredEmployees.sort((a, b) => a.salary - b.salary);
    } else if (sortOrder === "Descending") {
        filteredEmployees.sort((a, b) => b.salary - a.salary);
    }


    // Render table rows
    tbody.innerHTML = "";
    filteredEmployees.forEach((emp) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${emp.E_id}</td>
            <td>${emp.E_name}</td>
            <td>${emp.salary}</td>
            <td>${emp.Department}</td>
            <td><button onclick="deleteEmployee(${emp.E_id})">Delete</button></td>
        `;
        tbody.appendChild(row);
    });
}


// Delete employee and refresh table
function deleteEmployee(E_id) {
    Employees = Employees.filter(emp => emp.E_id !== E_id);
    renderTable();
}


// callback function
DepartmentDropdown();
renderTable();












