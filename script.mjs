 function doConvert(event)   {

    console.log("button clicked");
    event.preventDefault();

    let myNumber = document.querySelector("#myNumber").value.trim();

    if (myNumber === "") {
        alert("Please enter a value in the input field.");
        return; // Exit the function if the input is empty.
    }
    

    console.log(myNumber);
    

    let result = Number(myNumber) * 1.8 + 32;
    console.log(result);

    let message = `Answer:  ${myNumber}°C = ${result}°F`;

    document.querySelector("#resultBox").innerHTML = message;

}