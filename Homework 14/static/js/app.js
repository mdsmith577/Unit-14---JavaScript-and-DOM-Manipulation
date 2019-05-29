// from data.js
var tableData = data;

// YOUR CODE HERE!





function createTable(){
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
  

var searchButton = d3.select("#filter-btn");

searchButton.on("click", function() {


    d3.event.preventDefault();
  

    var dateSearch = d3.select("#datetime").property("value");
    var citySearch = d3.select("#citySearch").property("value");
    var stateSearch = d3.select('#statename').property("value");
    var countrySearch = d3.select('#countryname').property("value");
    var shapeSearch = d3.select('#shapename').property("value");

    if (dateSearch != "" ){
        tableData = data.filter(event => event.datetime === dateSearch);
    } else {
        tableData = data;}

    if (citySearch != "" ){
        tableData = tableData.filter(event => event.city === citySearch);
    } else {
        tableData;}

    if (stateSearch != "" ){
        tableData = tableData.filter(event => event.state === stateSearch);
    } else {
        tableData;}

    if (countrySearch != "" ){
        tableData = tableData.filter(event => event.country === countrySearch);
    } else {
        tableData;}

    if (shapeSearch != "" ){
        tableData = tableData.filter(event => event.shape === shapeSearch);
    } else {
        tableData;}
    createTable();
});  


// TODO: UPPERCASE STATE SO THE DROPDOWN IS IN ALL CAPS AND NOT LOWERCASE (AS IT COMES FROM DATA.JS)

var statesInDatabase = Array.from(new Set(data.map(item=>item.state)));
statesInDatabase.unshift("");
var stateList = d3.select("#statename");
stateList.selectAll('option').data(statesInDatabase).enter()
        .append('option').attr("value", function (d) { return d; }).text(function(d){ return d;});


// TODO: PROPERLY CAPITALIZE COUNTRY IN THE DROPDOWN, NOT LOWERCASE (AS IT COMES FROM DATA.JS)

var countriesInDatabase = Array.from(new Set(data.map(item=>item.country)));
countriesInDatabase.unshift("");
var countryList = d3.select("#countryname");
countryList.selectAll('option').data(countriesInDatabase).enter()
        .append('option').attr("value", function (d) { return d; }).text(function(d){ return d;});


// TODO: PROPERLY CAPITALIZE SHAPE IN THE DROPDOWN, NOT LOWERCASE (AS IT COMES FROM DATA.JS)

var shapesInDatabase = Array.from(new Set(data.map(item=>item.shape)));
shapesInDatabase.unshift("");
var shapeList = d3.select("#shapename");
shapeList.selectAll('option').data(shapesInDatabase).enter()
        .append('option').attr("value", function (d) { return d; }).text(function(d){ return d;});