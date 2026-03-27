const students = [];

const studentForm = document.getElementById("studentForm");
const studentNameInput = document.getElementById("studentName");
const studentMarksInput = document.getElementById("studentMarks");
const formMessage = document.getElementById("formMessage");

const totalStudentsElement = document.getElementById("totalStudents");
const classAverageElement = document.getElementById("classAverage");
const topStudentElement = document.getElementById("topStudent");
const studentsTableBody = document.getElementById("studentsTableBody");

const calculateAverage = (marks) => {
    if (marks.length === 0) {
        return 0;
    }

    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return total / marks.length;
};

const parseMarks = (marksText) => {
    const values = marksText
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== "");

    if (values.length === 0) {
        return null;
    }

    const marks = values.map((item) => Number(item));
    const hasInvalidMark = marks.some((mark) => Number.isNaN(mark) || mark < 0 || mark > 100);

    if (hasInvalidMark) {
        return null;
    }

    return marks;
};

const getClassAverage = () => {
    if (students.length === 0) {
        return 0;
    }

    const totalAverage = students.reduce((sum, student) => sum + student.average, 0);
    return totalAverage / students.length;
};

const getTopStudent = () => {
    if (students.length === 0) {
        return null;
    }

    return students.reduce((topStudent, currentStudent) => {
        if (currentStudent.average > topStudent.average) {
            return currentStudent;
        }

        return topStudent;
    }, students[0]);
};

const showMessage = (text, isError) => {
    formMessage.textContent = text;
    formMessage.style.color = isError ? "#c62828" : "#1b7f3c";
};

const renderSummary = () => {
    totalStudentsElement.textContent = String(students.length);
    classAverageElement.textContent = getClassAverage().toFixed(2);

    const topStudent = getTopStudent();
    topStudentElement.textContent = topStudent
        ? `${topStudent.name} (${topStudent.average.toFixed(2)})`
        : "-";
};

const renderStudentsTable = () => {
    if (students.length === 0) {
        studentsTableBody.innerHTML = `
            <tr>
                <td colspan="4" class="empty-state">No students added yet.</td>
            </tr>
        `;
        return;
    }

    const rows = students.map((student, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.marks.join(", ")}</td>
            <td>${student.average.toFixed(2)}</td>
        </tr>
    `);

    studentsTableBody.innerHTML = rows.join("");
};

studentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = studentNameInput.value.trim();
    const marks = parseMarks(studentMarksInput.value);

    if (name === "") {
        showMessage("Please enter a student name.", true);
        return;
    }

    if (!marks) {
        showMessage("Please enter valid marks between 0 and 100, separated by commas.", true);
        return;
    }

    const student = {
        name,
        marks,
        average: calculateAverage(marks)
    };

    students.push(student);
    renderStudentsTable();
    renderSummary();

    studentForm.reset();
    showMessage("Student added successfully.", false);
    studentNameInput.focus();
});

renderStudentsTable();
renderSummary();