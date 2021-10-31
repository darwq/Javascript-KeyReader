var button = $("#light-button");
var anchor = $("#light-button a");
var counter = 0;
var i = 0;
let listenerControl = 0;

button.click(function () {
  $("body").toggleClass("dark-body");
  button.toggleClass("dark");
  $(".info-div").toggleClass("dark-info-div");
  $(".user-input").toggleClass("user-input-dark");
  $(".title").toggleClass("title-dark");
  $(".title-value").toggleClass("title-value-dark");
  switch (counter) {
    case 0:
      counter++;
      anchor.text("Dark Theme");
      break;

    case 1:
      counter--;
      anchor.text("Light Theme");
  }
});

$(document).keydown(function (event) {
  $(".info-div").hide();
  if (i === 0) {
    i++;
    $(".info-div").before("<h1 class='user-input'>" + event.which + "</h1>");
    $(".user-input").after("<div class='events'></div>");
    $(".events").append("<p class='title'>event.key</p>");
    $(".events").append(
      "<h2 class='title-value title-value-key'>" + event.key + "</h2>"
    );
    $(".events").after("<div class='events location'></div>");
    $(".location").append("<p class='title'>event.location</p>");
    $(".location").append(
      "<h2 class='title-value title-value-location'>" +
        event.originalEvent.location +
        "</h2>"
    );
    $(".location").after("<div class='events which'></div>");
    $(".which").append("<p class='title'>event.which</p>");
    $(".which").append(
      "<h2 class='title-value title-value-which'>" + event.which + "</h2>"
    );
    $(".which").after("<div class='events code'></div>");
    $(".code").append("<p class='title'>event.which</p>");
    $(".code").append(
      "<h2 class='title-value title-value-code'>" + event.code + "</h2>"
    );
  } else {
    $(".user-input").text(event.which);
    $(".title-value").text(event.key);
    $(".title-value-location").text(event.originalEvent.location);
    $(".title-value-which").text(event.which);
    $(".title-value-code").text(event.code);
  }
  
  if(listenerControl === 0){
     $(".title-value").click(function () {
    navigator.clipboard.writeText($(this).text());
    $("#bar").append(
      "<div class='coppied-text-message'><p class='message'>Text was coppied</p></div>"
    );
    setTimeout(function () {
      $(".coppied-text-message").hide(500);
    }, 1500);

    if (counter === 1) {
      $(".coppied-text-message").toggleClass("coppied-text-message-dark");
    }
    listenerControl++;
  });
  }

});
