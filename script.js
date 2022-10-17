let numberOfSides = 0;
let result = 0;

function rollDice() {
    numberOfSides = document.getElementById("myForm").elements.namedItem("numberOfFaces").value;

    result = Math.floor(Math.random() * numberOfSides + 1);

    document.forms["myForm"]["resultBox"].value = result;

    logResult(result);
}

let resultsOnScreen = 0;
let rollNumber = 0;

function logResult(){

    resultsOnScreen++;
    rollNumber++;
    
    const rtRollNumber = document.createElement("td");     //create new element
    rtRollNumber.className="resultsList";
    rtRollNumber.innerHTML= rollNumber;

    const resultElement = document.createElement("td");     //create new element
    resultElement.className="resultsList";
    resultElement.innerHTML= result;
    
    const rtNumberOfSides = document.createElement("td");     //create new element
    rtNumberOfSides.className="resultsList";
    rtNumberOfSides.innerHTML= numberOfSides;

    const rtRow = document.createElement("tr");     //create new row
    resultElement.className="resultsList";


    if( resultsOnScreen < 10 ){
        document.getElementById("resultsTable").appendChild(resultElement);   //add new result to html table
        document.getElementById("resultsTable").appendChild(rtNumberOfSides);   //add new result to html table
        document.getElementById("resultsTable").appendChild(rtRollNumber);   //add new result to html table
        document.getElementById("resultsTable").appendChild(rtRow);   //add new row to html table
 
    }
    else{
        const list = document.querySelectorAll(".resultsList");     //remove all results if list is full
      
        list.forEach(box => {
            box.remove();
          });
    
        document.getElementById("resultsTable").appendChild(resultElement);  //add new result to html table
        document.getElementById("resultsTable").appendChild(rtNumberOfSides);   //add new result to html table
        document.getElementById("resultsTable").appendChild(rtRollNumber);   //add new result to html table
        document.getElementById("resultsTable").appendChild(rtRow);   //add new row to html table

        resultsOnScreen = 1;
    }
    
}