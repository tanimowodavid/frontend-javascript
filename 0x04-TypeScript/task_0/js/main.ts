interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "David",
  lastName: "Tanimowo",
  age: 25,
  location: "Lagos",
};
const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 23,
  location: "Abuja",
};
const studentsList: Student[] = [student1, student2];

// how can this fit into the code ["studentsList", "const"]

const table = document.createElement("table");

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
