






function takevalues() {
    var fname = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    let obj = {
      FirstName: fname,
      LastName: lastName,
      dateOfBirth: dob,
      email: email,
      Gender: gender,
    };
    arrayObj.push(obj);
  
    console.log(arrayObj);
    printValues();
    empty();
  }

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const table = document.querySelector(".table");
    table.style.display = "block";
  });
  
  let arrayObj = [];
  
 
  
  function printValues() {
    let tableBody = document.querySelector(".table tbody");
    tableBody.innerHTML = ""; 
    arrayObj.forEach((elem, index) => {
      let row = document.createElement("tr");
  
      let numberCell = document.createElement("td");
      numberCell.textContent = index + 1;
      row.appendChild(numberCell);
  
      let firstNameCell = document.createElement("td");
      firstNameCell.textContent = elem.FirstName;
      row.appendChild(firstNameCell);
  
      let lastNameCell = document.createElement("td");
      lastNameCell.textContent = elem.LastName;
      row.appendChild(lastNameCell);
  
      let dobCell = document.createElement("td");
      dobCell.textContent = elem.dateOfBirth;
      row.appendChild(dobCell);
  
      let emailCell = document.createElement("td");
      emailCell.textContent = elem.email;
      row.appendChild(emailCell);
  
      let genderCell = document.createElement("td");
      genderCell.textContent = elem.Gender;
      row.appendChild(genderCell);
  
      let actionCell = document.createElement("td");
      actionCell.innerHTML = `<button class="edit">Edit</button>
      <button class="delete" data-index="${index}">Delete</button>`;
      row.appendChild(actionCell);
      tableBody.appendChild(row);
    });
  
    
    document.querySelectorAll(".delete").forEach((button) => {
      button.addEventListener("click", function () {
        let index = this.getAttribute("data-index");
        arrayObj.splice(index, 1); 
        printValues(); 
      });
    });
  }
  
  function empty() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("email").value = "";
    document.getElementById("gender").value = "";
  }
  




// document.getElementById("myForm").addEventListener("submit", function (event) {
//     event.preventDefault();
//     const table = document.querySelector(".table");
//     table.style.display = "block";
//     takeValues();
//   });
  
//   let arrayObj = [];
  
//   function takeValues() {
//     const obj = {
//       FirstName: document.getElementById("fname").value,
//       LastName: document.getElementById("lname").value,
//       dateOfBirth: document.getElementById("dob").value,
//       email: document.getElementById("email").value,
//       Gender: document.getElementById("gender").value,
//     };
//     arrayObj.push(obj);
  
//     console.log(arrayObj);
//     printValues();
//     clearForm();
//   }
  
//   function printValues() {
//     const tableBody = document.querySelector(".table tbody");
//     tableBody.innerHTML = "";
//     arrayObj.forEach((elem, index) => {
//       const row = document.createElement("tr");
  
//       row.innerHTML = `
//         <td>${index + 1}</td>
//         <td>${elem.FirstName}</td>
//         <td>${elem.LastName}</td>
//         <td>${elem.dateOfBirth}</td>
//         <td>${elem.email}</td>
//         <td>${elem.Gender}</td>
//         <td>
//           <button class="edit">Edit</button>
//           <button class="delete">Delete</button>
//         </td>
//       `;
  
//       tableBody.appendChild(row);
//     });
  
//     document.querySelectorAll(".delete").forEach((btn, index) => {
//       btn.addEventListener("click", () => {
//         arrayObj.splice(index, 1);
//         printValues();
//       });
//     });
  
//     document.querySelectorAll(".edit").forEach((btn, index) => {
//       btn.addEventListener("click", () => {
//         editRow(index);
//       });
//     });
//   }
  
//   function clearForm() {
//     document.getElementById("fname").value = "";
//     document.getElementById("lname").value = "";
//     document.getElementById("dob").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("gender").value = "";
//   }
  
//   function editRow(index) {
//     const elem = arrayObj[index];
//     document.getElementById("fname").value = elem.FirstName;
//     document.getElementById("lname").value = elem.LastName;
//     document.getElementById("dob").value = elem.dateOfBirth;
//     document.getElementById("email").value = elem.email;
//     document.getElementById("gender").value = elem.Gender;
  
//     // Remove the item to update after editing
//     // arrayObj.splice(index, 1);
//   }
  



