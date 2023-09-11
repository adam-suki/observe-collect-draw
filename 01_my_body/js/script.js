// Sample data in a list variable
const data = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8"];

// The number of columns you want
const numberOfColumns = 4;

// Calculate the number of items in each column
const itemsPerColumn = Math.ceil(data.length / numberOfColumns);

// Create an array of arrays to group the data into columns
const columns = [];

for (let i = 0; i < numberOfColumns; i++) {
    columns.push(data.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn));
}

// Select the container div using D3.js
const container = d3.select("#column-container");

// Create and populate the columns
columns.forEach((columnData) => {
    const column = container.append("div")
        .attr("class", "column");

    column.selectAll("p")
        .data(columnData)
        .enter()
        .append("p")
        .text((d) => d);
        
});
