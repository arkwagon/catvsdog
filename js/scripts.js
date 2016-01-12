$(document).ready(function() {
  $("button#dog-button").click(function() {
    $("ul#dog-list").prepend("<li>RUFF RUFF RUFF!</li>");
    $("ul#cat-list").prepend("<li>MRAAWAWRR</li>");
  });

  $("button#cat-button").click(function() {
    $("ul#cat-list").prepend("<li>Hello Puppy</li>");
    $("ul#dog-list").prepend("<li>GRRRRRRRR!!!</li>");
  });

  $("button#result-button").click(function() {
    $("button#reset-button").after('<img src="img/dogcat.jpg" id="result-photo">');
  });

  $("button#reset-button").click(function() {
    location.reload();
  });




});
