// from data.js
var tableData = data;

// YOUR CODE HERE!





function populateTable(){
    var tbody = d3.select("tbody");
    tbody.remove();
    var table = d3.select("#ufo-table");
    table.append("tbody");
    tbody = d3.select("tbody");
    tableData.forEach(function(event) {
        var row = tbody.append("tr");
        Object.entries(event).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
  

var filterTableButton = d3.select("#filter-btn");

filterTableButton.on("click", function() {


    d3.event.preventDefault();
  

    var dateValue = d3.select("#datetime").property("value");
    var cityName = d3.select("#cityname").property("value");
    var stateValue = d3.select('#statename').property("value");
    var countryValue = d3.select('#countryname').property("value");
    var shapeValue = d3.select('#shapename').property("value");

    if (dateValue != "" ){
        tableData = data.filter(event => event.datetime === dateValue);
    } else {
        tableData = data;}

    if (cityName != "" ){
        tableData = tableData.filter(event => event.city === cityName);
    } else {
        tableData;}

    if (stateValue != "" ){
        tableData = tableData.filter(event => event.state === stateValue);
    } else {
        tableData;}

    if (countryValue != "" ){
        tableData = tableData.filter(event => event.country === countryValue);
    } else {
        tableData;}

    if (shapeValue != "" ){
        tableData = tableData.filter(event => event.shape === shapeValue);
    } else {
        tableData;}
    populateTable();
});  


var stateOptions = Array.from(new Set(data.map(item=>item.state)));
stateOptions.unshift("");
var stateList = d3.select("#statename");
stateList.selectAll('option').data(stateOptions).enter()
        .append('option').attr("value", function (d) { return d; }).text(function(d){ return d;});


var countryOptions = Array.from(new Set(data.map(item=>item.country)));
countryOptions.unshift("");
var countryList = d3.select("#countryname");
countryList.selectAll('option').data(countryOptions).enter()
        .append('option').attr("value", function (d) { return d; }).text(function(d){ return d;});


var shapeOptions = Array.from(new Set(data.map(item=>item.shape)));
shapeOptions.unshift("");
var shapeList = d3.select("#shapename");
shapeList.selectAll('option').data(shapeOptions).enter()
        .append('option').attr("value", function (d) { return d; }).text(function(d){ return d;});