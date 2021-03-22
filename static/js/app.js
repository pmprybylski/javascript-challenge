// from data.js
var tableData = data;

// Select table body
var tbody = d3.select('tbody');

// Create function to populate the table
function populate() {
    tableData.map(sighting => {

        // Make new row
        var row = tbody.append('tr');

        // append each row with data
        row.append('td').text(sighting.datetime);
        row.append('td').text(sighting.city);
        row.append('td').text(sighting.state);
        row.append('td').text(sighting.country);
        row.append('td').text(sighting.shape);
        row.append('td').text(sighting.durationMinutes);
        row.append('td').text(sighting.comments);
    });
}

// Populate Table
populate();

// Event Listener: filter by date input
var button1 = d3.select('#filter-btn');

button.on('click', function() {

    // Select user input
    var input = d3.select('#datetime').property('value');
    console.log(input);

    // Filter based on user input
    var filteredData = tableData.filter(data => data.datetime === input);
    console.log(filteredData);

    // Clear original table
    tbody.html('');

    // Iterate through data to create new table
    filteredData.forEach(sighting => {

        // Make new row
        var row = tbody.append('tr');

        // Append each row with data
        row.append('td').text(sighting.datetime);
        row.append('td').text(sighting.city);
        row.append('td').text(sighting.state);
        row.append('td').text(sighting.country);
        row.append('td').text(sighting.shape);
        row.append('td').text(sighting.durationMinutes);
        row.append('td').text(sighting.comments);
    });
});

