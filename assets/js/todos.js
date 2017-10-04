$("ul").on("click", "li", function() {
  $(this).toggleClass("done");
});

$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  //this will prevent to triger another overridden props
  event.stopPropagation();
});

// appending the entered todo to the next li
$('input[type="text"]').keypress(function(event) {
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append(
      "<li><span><i class='fa fa-times'></i></span> " + todoText + "</li>"
    );
  }
});

//make the toggle button toggleable

$(".fa-toggle-off").click(function(){
    'use strict';
    $(this).toggleClass('fa-toggle-on');
    $("input[type='text']").fadeToggle();
});

// $(".fa-toggle-off").click(function)
