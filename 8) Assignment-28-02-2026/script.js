// 1. Data Store: Array of Objects
const students = [
    { name: "Suhas", marks: 85 },
    { name: "Anish", marks: 92 },
    { name: "Priya", marks: 78 },
    { name: "Rahul", marks: 88 },
    { name: "Sneha", marks: 95 },
    { name: "Manoj", marks: 80 }
];

// 2. Select DOM Elements
const tableBody = document.getElementById('tableBody');
const summaryDiv = document.getElementById('summary');

// 3. Logic: Calculate Average and Display Data
function manageStudents() {
    let totalMarks = 0;
    let tableHTML = "";

    // Using a loop to process the array
    students.forEach(student => {
        totalMarks += student.marks;
        tableHTML += `<tr>
            <td>${student.name}</td>
            <td>${student.marks}</td>
        </tr>`;
    });

    // Calculate Average
    const average = totalMarks / students.length;

    // 4. Update the UI
    tableBody.innerHTML = tableHTML;
    summaryDiv.innerHTML = `
        <p><strong>Total Students:</strong> ${students.length}</p>
        <p><strong>Class Average:</strong> ${average.toFixed(2)}%</p>
    `;

    // Log to console for the "Logic Challenge" verification
    console.log("Student Data Processed:", students);
    console.log("Calculated Average:", average);
}

// Execute the function
manageStudents();