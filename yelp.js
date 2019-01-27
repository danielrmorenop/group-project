$("#pizzaButton").on("click", function() {

var food = $("#pizzaButton");
    var queryURL = "https://api.yelp.com/v3/businesses/search?term="+food+"&location=Miami&limit=6&open_now=true&radius=2000";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var tBody = $("tbody");
    var tRow = $("<tr>");
    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its text
    var restaurantName = $("<td>").text(response.name);
    var address = $("<td>").text(response.address1);
    var price = $("<td>").text(response.price);
    console.log (response)
    // Append the newly created table data to the table row
    tRow.append(restaurantName, address, price);
    // Append the table row to the table body
    tBody.append(tRow);
  })};
  console.log (queryURL)