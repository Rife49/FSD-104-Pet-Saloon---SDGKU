function changeTitle(){
    //Testing -> Terigger an alert
    // alert ("Is Working!");

    // Get the HTML elemnet with the id="Title" it in a variable
    let title = document.getElementById("title");

    // Change the tect inside the title element 
   // title.innerHTML = " <i> Hello, Cohort 66! </i>";
    title.textContent = "<i> Text </i>";

    // Get all the elements with the class="text" ,  and store them in a variable
    let paragraphs = document.getElementsByClassName("text");

    paragraphs[0].style.color = "blue";
    paragraphs[1].style.color = "red";
}

function addItem(){
    let value = document.getElementById("itemInput").value;
    let list = document.getElementById("list");

    //Create HTML elements in the JS -> createElement
    let li = document.createElement("li")

    // Ad the value to the li ->
    li.innerHTML = value;

    // Add the li to the list 
    list.appendChild(li);

    // clear input field
    value.value = "";
}