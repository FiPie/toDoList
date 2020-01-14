$(function() {

  var head = $("<h1 id='header'></h1>").text("To Do List");
  $("body").after(head);
  var input = $("<input></input>");
  input.attr({
    "type": "text",
    "placeholder": "New item"
  });
  $("#header").after(input);
  var addButton = $("<button></button>").text("Add");
  addButton.attr("id", "add");
  $("input").after(addButton);
  var list = $("<ol id='myList'></ol>");
  $("#add").after(list);

  $("#add").on("click", function() {
    var value = $("input").val();
    if (value !== '') {
      var elem = $("<li class='item'></li>").text(value);
      $(elem).click(function() {
        $(this).toggleClass("done");
        if ($(this).attr("class") == "item done") {
          $(this).css({
            "text-decoration": "line-through",
            "color": "lightgrey"
          });
        } else {
          $(this).css({
            "text-decoration": "none",
            "color": "black"
          });
        }
      });
      $(elem).append("<button class='rem'>X</button>");
      $("#myList").append(elem);
      $("input").val("");

      $(".rem").on("click", function() {
        $(this).parent().remove();
      });

    }
  });


});