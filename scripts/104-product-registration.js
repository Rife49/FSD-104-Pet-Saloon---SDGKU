// Identify/select the form
const productForm = document.querySelector("form"); //search HTMML element



// Identify the table body 
const body = document.getElementById("body");

// Constructor
function Product(productName, productPrice, productCategory){
this.name = productName
this.price = productPrice
this.category = productCategory
}


// Funvtion to retrieve the information
function registerProduct(event){

    event.preventDefault(); // prevent the browser from being refreshed
    console.log(event);


// ise the name if the inpu to get the value
    let name = productForm.elements["ProductName"].value;
    let price = productForm.elements["ProductPrice"].value;
    let category = productForm.elements["ProductCategory"].value;


// Create the object 
    const newProduct = new Product(name, price, category);

// Test: console log the value
    console.log(`
        Name: ${newProduct.name}
        Price: ${newProduct.price}
        Category: ${newProduct.category}
        `)

//  Tets: Console log the values
    console.log(`
        Name: ${name}
        Price: ${price}
        Category ${category}
    `);
    
// us the value -> - DB - Email - Browser

// Create the row 
    const row = document.createElement("tr");

    row.innerHTML = `
        <td> ${name} </td>
        <td> ${price} </td>
        <td> ${category} </td>
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
