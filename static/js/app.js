// from data.js
var tableData = data;

// Select table body
var tbody = d3.select('tbody');

// Create function to populate the table
function populate() {
    tableData.map(data => {

        // Make new row
        var row = tbody.append('tr');

        // append each row with data
        row.append('td').text(data.datetime);
        row.append('td').text(data.city);
        row.append('td').text(data.state);
        row.append('td').text(data.country);
        row.append('td').text(data.shape);
        row.append('td').text(data.durationMinutes);
        row.append('td').text(data.comments);
    });
}