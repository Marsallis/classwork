console.log($);
if (typeof $ == 'undefined') {
  console.log('oops! I still have to link my jQuery properly!');
} else { console.log('I did it! I linked jQuery and this js file properly!') };
// add a document.ready function
$(() => {
  // Create a div using jquery
  const $div = $("<div>").addClass("meat");
  // create an h3 element
  // give that element some text
  // append to our div
  const $h3 = $("<h3>").text("Ostrich");
  $div.append($h3);
  const $secondh3 = $("<h3>").text("Cheese");
  const $secondDiv = $("<div>").addClass("dairy").append($secondh3);
  // select the body and append the $div variable
  $("body").append($div);
  $("body").append($secondDiv);
  // Hide all divs with the class meat
  const $meat = $(".meat");
  $meat.hide("slow");
  // Prepend an image to the body
  const $image = $("<img>").attr("src", "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D");
  $("body").prepend($image);


// Create a variable called $divs that holds all the divs on the page
const $divs = $("div");
// console.log($divs[0]);
$divs.eq(1).css("background-color", "pink");
$divs.eq(2).html("<h2>Hello World</h2>");
// Change the text of the second divs to be Kohlrabi
});
