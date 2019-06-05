// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

data.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the submit button
var filterBtn = d3.select("filter-btn");

// Select the input element and get the raw HTML node
var inputText = d3.select("#datetime");

// filter data with desired date
function changeHandler() {
    d3.event.preventDefault();
    console.log(inputText.property("value"));
    var newTable = tableData.filter(ufoData =>
        ufoData.datetime === inputText.property("value"))
    displayData(newTable)
}


// Event listener to handle change and click
inputText.on("change", changeHandler);
button.on("click", changeHandler);
