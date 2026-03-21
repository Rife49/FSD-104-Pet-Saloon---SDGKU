$("#serviceForm").submit(function(event) {
    event.preventDefault();

    // 1. Get the values of the input - JQuery
    const name = $("#serviceName").val().trim();

    // 2. Validate if the values are empty or not 
    // 2.1 change the borders. of the input to red - JQuery
    // !name
    if(name == ""){
        alert("Hey! The value is required, compadre.");
    } else {
        alert(`The value is: ${name}`);
    }
});