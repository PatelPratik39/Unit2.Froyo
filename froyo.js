// lets create User Input
const userInput = prompt("Please, Enter your Froyo Flavours : ");

// create a userinput into an Array with "," seperation
const flavours = userInput.split(',');
console.table(flavours);
// create an Array where we can store the values
const flavourCount = {};

// function to update flavour count
function updateFlavourCount(flavor){
    if(flavourCount[flavor]){
        flavourCount[flavor]++;
    } else {
        flavourCount[flavor]=1;
    }
}

// Iterate through the array and update the flavor count 
flavours.forEach(updateFlavourCount);

// Display the flavor count in the console
console.table(flavourCount);
