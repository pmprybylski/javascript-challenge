# javascript-challenge
ALIENS-R-REAL UFO project

## Goal

Use D3 and JavaScript to populate an HTML table with UFO sighing data, and create an event listener to seach the "Date" column to find rows that match the user input.

## Process
Using a starter HTML file, adjustments were made to generate a webpage to house the table.

To populate the rest of the table, data was sources from 'data.js' into app.js ('tableData').  The table body was selected using d3.select, and a function('populate') was created to populate the table by mapping 'tableData'.  This function appends a new table row for each object(dictionary), and populates each column with the values for each key withing that object.  To populate the table, the function is simply called.

To filter the table based on user input by date, an anonymous function was used, which will trigger when the 'Filter Table' button is clicked.  This function first selects the user input with 'd3.select()' and '.property('value')'.  It then filters 'tableData' based on that input value with '.filter()', storing the the results in 'filteredData'.  After, the original table is cleared using 'tbody.html('')' and is repopulated with 'filteredData' using a 'forEach' loop on 'filteredData' to append a new row and populate each column.



