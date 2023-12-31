var jsonData = {
    "students": [
        {
            "id": 1,
            "name": "John Doe",
            "age": 20,
            "grade": "A",
            "courses": ["Math", "English", "Science"]
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "age": 21,
            "grade": "B",
            "courses": ["History", "Art", "Physics"]
        },
        {
            "id": 3,
            "name": "Bob Johnson",
            "age": 19,
            "grade": "C",
            "courses": ["Chemistry", "Literature", "Physical Education"]
        },
        {
            "id": 4,
            "name": "Alice Williams",
            "age": 22,
            "grade": "A",
            "courses": ["Computer Science", "Spanish", "Biology"]
        },
        {
            "id": 5,
            "name": "Michael Davis",
            "age": 20,
            "grade": "B",
            "courses": ["Geography", "French", "Statistics"]
        },
        {
            "id": 6,
            "name": "Emily Brown",
            "age": 21,
            "grade": "C",
            "courses": ["Economics", "Psychology", "Music"]
        },
        {
            "id": 7,
            "name": "Ryan Taylor",
            "age": 19,
            "grade": "A",
            "courses": ["Sociology", "Anthropology", "Philosophy"]
        },
        {
            "id": 8,
            "name": "Sophia Miller",
            "age": 22,
            "grade": "B",
            "courses": ["Political Science", "Italian", "Theater"]
        },
        {
            "id": 9,
            "name": "David Wilson",
            "age": 20,
            "grade": "C",
            "courses": ["Engineering", "Japanese", "Dance"]
        },
        {
            "id": 10,
            "name": "Olivia Anderson",
            "age": 21,
            "grade": "A",
            "courses": ["Public Health", "Chinese", "Film Studies"]
        },

    ]
};

console.log(jsonData);

// Function to generate table rows from JSON data
function generateTableRows() {
    var tableBody = document.getElementById("studentTable").getElementsByTagName('tbody')[0];

    // Clear existing rows
    tableBody.innerHTML = "";

    for (var i = 0; i < jsonData.students.length; i++) {
        var student = jsonData.students[i];
        var row = tableBody.insertRow(i);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

        cell1.innerHTML = student.id;
        cell2.innerHTML = student.name;
        cell3.innerHTML = student.age;
        cell4.innerHTML = student.grade;
        cell5.innerHTML = student.courses.join(", ");

        // Add a delete button with an onclick event
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            deleteRow(this); // Pass the button element to the deleteRow function
        };
        cell6.appendChild(deleteButton);
    }
}

// Create a function to handle the delete action
function deleteRow(button) {
    var row = button.parentNode.parentNode; // Get the parent row of the button
    row.parentNode.removeChild(row); // Remove the row from the table
}
// function generatelist(){
//     for(i=0;i<=students.length;i++){
//         var std_list = document.getElementsByTagName("ul").document.createElement("li" [i]);
//         std_list.innerHTML=students[1].name;
//     }
// }
// function generatelist() {
//     var ulElement = document.querySelector('.list-container ul');

//     // Clear existing list items
//     ulElement.innerHTML = "";

//     for (var i = 0; i < jsonData.students.length; i++) {
//         var student = jsonData.students[i];
//         let liElement = document.createElement('li'); // Use let instead of var

//         // Create a delete button
//         var deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         deleteButton.addEventListener('click', function () {
//             // Remove the corresponding li when the delete button is clicked
//             ulElement.removeChild(liElement);
//         });

//          // Create an edit button
//          var editButton = document.createElement('button');
//          editButton.textContent = 'Edit';
//          editButton.addEventListener('click', function () {
//              // Call a function to handle the edit action
//              editStudent(i);
//          });

//         // Add student details and delete button to the li
//         liElement.textContent = `students details= ${student.id} ${student.name} ${student.age} ${student.grade} ${student.courses}`;
//         liElement.appendChild(deleteButton);
//         liElement.appendChild(editButton);
//         // Add the li to the ul
//         ulElement.appendChild(liElement);
//     }
// }
function generatelist() {
    var ulElement = document.querySelector('.list-container ul');

    // Clear existing list items
    ulElement.innerHTML = "";

    for (var i = 0; i < jsonData.students.length; i++) {
        var student = jsonData.students[i];
        let liElement = document.createElement('li'); // Use let instead of var

        // Create a delete button
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            // Remove the corresponding li when the delete button is clicked
            ulElement.removeChild(liElement);
        });

        // Create an edit button with an IIFE to capture the correct value of i
        var editButton = (function (index) {
            var button = document.createElement('button');
            button.textContent = 'Edit';
            button.addEventListener('click', function () {
                // Call a function to handle the edit action
                editStudent(index);
            });
            return button;
        })(i);

        // Add student details and delete button to the li
        liElement.textContent = `students details= ${student.id} ${student.name} ${student.age} ${student.grade} ${student.courses}`;
        liElement.appendChild(deleteButton);
        liElement.appendChild(editButton);
        // Add the li to the ul
        ulElement.appendChild(liElement);
    }
}

// // Function to add a new student to the list and table
// function addStudent() {
//     var form = document.getElementById("addForm");
//     var id = form.elements["id"].value;
//     var name = form.elements["name"].value;
//     var age = form.elements["age"].value;
//     var grade = form.elements["grade"].value;
//     var courses = form.elements["courses"].value.split(", "); // Split courses into an array

//     // Add the new student to the jsonData.students array
//     jsonData.students.push({
//         "id": parseInt(id),
//         "name": name,
//         "age": parseInt(age),
//         "grade": grade,
//         "courses": courses
//     });

// Generate the new row in the table
// generateTableRows();

// Generate the new list item in the ul
// generatelist();

// Reset the form fields
// form.reset();
// }
// Function to add a new student to the list and table at a specific index
function addStudent(index) {
    var form = document.getElementById("addForm");
    var id = form.elements["id"].value;
    var name = form.elements["name"].value;
    var age = form.elements["age"].value;
    var grade = form.elements["grade"].value;
    var courses = form.elements["courses"].value.split(", "); // Split courses into an array

    // Insert the new student at the specified index
    jsonData.students.splice(index, 0, {
        "id": parseInt(id),
        "name": name,
        "age": parseInt(age),
        "grade": grade,
        "courses": courses
    });

    // // Push the new student to the end of the array, this method has no need of index
    // jsonData.students.push({
    //     "id": parseInt(id),
    //     "name": name,
    //     "age": parseInt(age),
    //     "grade": grade,
    //     "courses": courses
    // });

    // Generate the new row in the table
    generateTableRows();

    // Generate the new list item in the ul
    generatelist();

    // Reset the form fields
    form.reset();
}

// // Function to handle the edit action
// function editStudent(index) {
//     var form = document.getElementById("addForm");
//     var idField = form.elements["id"];
//     var nameField = form.elements["name"];
//     var ageField = form.elements["age"];
//     var gradeField = form.elements["grade"];
//     var coursesField = form.elements["courses"];

//     // Get the student data at the specified index
//     var student = jsonData.students[index];

//     // Set the form fields with the student data
//     idField.value = student.id;
//     nameField.value = student.name;
//     ageField.value = student.age;
//     gradeField.value = student.grade;
//     coursesField.value = student.courses.join(", ");

//     // Remove the student at the specified index
//     jsonData.students.splice(index, 1);

//     // Update the table rows and list
//     generateTableRows();
//     generatelist();
// }
function editStudent(index) {
    console.log(index);
    var form = document.getElementById("addForm");
    var idField = form.elements["id"];
    var nameField = form.elements["name"];
    var ageField = form.elements["age"];
    var gradeField = form.elements["grade"];
    var coursesField = form.elements["courses"];

    // Get the student data at the specified index
    var student = jsonData.students[index];
console.log(student);
    // Set the form fields with the student data
    idField.value = student.id;
    nameField.value = student.name;
    ageField.value = student.age;
    gradeField.value = student.grade;
    coursesField.value = student.courses.join(", ");

    // Call the function to generate table rows before removing the student
    generateTableRows();

    // Remove the student at the specified index
    jsonData.students.splice(index, 1);

    // Update the list
    generatelist();
}



// Function to change the content of all <th> elements to "abhi"
//  function changeThDataToAbhi() {
//     var thElements = document.getElementsByTagName('th');

//     for (var i = 0; i < thElements.length; i++) {
//         thElements[i].innerHTML = "abhi";
//     }
// }


// direct change the th cotent (it will be not work because it will call after DOMContentLoaded event)
// document.getElementsByTagName("th")[3].innerHTML="abhi";

// Call the function to generate table rows
// Call the function to generate table rows after the DOM is loaded

document.addEventListener("DOMContentLoaded", function () {

    // changeThDataToAbhi()
    generatelist();
    generateTableRows();
});
