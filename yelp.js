$("#pizzaButton").on("click", function(e) {
  e.preventDefault();

var food = $("#pizzaButton").val();
var queryURL = "https://api.yelp.com/v3/businesses/search?term="+food+"&location=Miami&limit=6&open_now=true&radius=2000";
  
  console.log (queryURL);

$.ajax({
    url: "https://api.yelp.com/v3/businesses/search?term=Pizza&location=Miami&limit=6&open_now=true&radius=2000",
    header: {
      'Authorization' : 'Bearer uf6J33hR-nMEJqUizsBxREhHXRm03lsphPCh9kPux9B9WqWYivxNeZyHXsNDpjjoQ5kD6dUK142n7RVRB25K14dVwG_Z35_mEBwxuGD-JspMoBQQ68Kjhdc1XO1NXHYx'},
      body: {
        access_token:'uf6J33hR-nMEJqUizsBxREhHXRm03lsphPCh9kPux9B9WqWYivxNeZyHXsNDpjjoQ5kD6dUK142n7RVRB25K14dVwG_Z35_mEBwxuGD-JspMoBQQ68Kjhdc1XO1NXHYx',
        expires_in: "a7WvYfT2xZR22GFf88mStA",
        token_type: "Bearer"
      },
    method: 'GET',
    dataType: 'json',
  }).then(function(response) 
  {
    console.log (response.name)
    var tBody = $("tbody");
    var tRow = $("<tr>");
    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its text
    var restaurantName = $("restaurantsHere").text(response.name);
    var address = $("restaurantsHere").text(response.address1);
    var price = $("restaurantsHere").text(response.price);
    console.log (response)
    // Append the newly created table data to the table row
    tRow.append(restaurantName, address, price);
    // Append the table row to the table body
    tBody.append(tRow);
  }
  )
});
