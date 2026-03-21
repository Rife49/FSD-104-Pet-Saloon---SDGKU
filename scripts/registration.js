// Identify/select the form
const productForm = document.querySelector("form"); //search HTMML element



// Identify the table body 
const body = document.getElementById("body");


// Funvtion to retrieve the information
function registerProduct(event){

    event.preventDefault(); // prevent the browser from being refreshed
    console.log(event);

    // ise the name if the inpu to get the value
    let name = productForm.elements["name"].value;
    let age = productForm.elements["age"].value;
    let breed = productForm.elements["breed"].value;
    let gender = productForm.elements["gender"].value;
    let services = productForm.elements["services"].value;
    let date = productForm.elements["date"].value;

    //  Tets: Console log the values
    console.log(`
        Name: ${name}
        Price: ${age}
        Breed ${breed}
        Gender ${gender}
        Services ${services}
        Date ${date}
    `);
    
    // us the value -> - DB - Email - Browser

    // Create the row 
    const row = document.createElement("tr");

    row.innerHTML = `
        <td> ${name} </td>
        <td> ${age} </td>
        <td> ${breed} </td>
        <td> ${gender} </td>
        <td> ${services} </td>
        <td> ${date} </td>
        <td> <button class="btn btn-danger delete-btn">Delete</button> <td>
    `;
      // Delete Button 
    row.querySelector(".delete-btn").addEventListener("click", function(){
    let confirmation = confirm("Really?");

    if(confirmation){
    row.remove();
    }
    }); 
    

// Add the row to the table body
    body.appendChild(row);
}


//Assignment 1

// Create pet objects
//let pet1 = {
   // name: "Rogue",
    //age: 1,
    //gender: "Male",
    //service: "Wash & Groom",
   // breed: "German Shepard"
//};

//let pet2 = {
  //  name: "Ghost",
    //age: 2,
    //gender: "Male",
    //service: "Gold Package",
    //breed: "Central Asian Shepard"
//};

//let pet3 = {
  //  name: "Rocko",
  //  age: 4,
  //  gender: "Male",
  //  service: "Gold Package",
  //  breed: "Kangal"
//};

// Create array and add pets
//let petsList = [pet1, pet2, pet3];

// Function to display pet names
function displayPets() {
    let output = "";

    for (let i = 0; i < petsList.length; i++) {
        output += `<li>${petsList[i].name}</li>`;
    }

    document.getElementById("pets").innerHTML = output;
}
