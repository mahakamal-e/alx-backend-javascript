interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Maha",
  lastName: "Kamal",
  age: 27,
  location: "Cairo"
};

const student2: Student = {
  firstName: "Hala",
  lastName: "Ali",
  age: 22,
  location: "Cairo"
};

const studentsList: Student[] = [student1, student2];

function renderTable(): void {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
}

// Call the function to render the table
renderTable();
