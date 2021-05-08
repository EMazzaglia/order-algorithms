const bubbleSort = require("./src/bubbleSort");

const exampleArray = Array.of(5, 1, 4, 2, 8);

const solutionPrinter = () => {
    console.log("Input array: ", exampleArray);
    bubbleSort(exampleArray);
    console.log("Output array: ", exampleArray);
}

solutionPrinter();