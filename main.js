function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "ydYjLy5SMImshN5pYgt0jY6z4FM3p1cefl9jsnvr1nhZeX164l"
    },
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous",
    type: "GET",
    dataType: "json",
    success: function(r) {
      currentQuote = r.quote;
      currentAuthor = r.author;
      $("#quote").text(r.quote);
      $("#author").text(r.author);
    }
  });
}
$(document).ready(function() {
  getQuote();
  $("#button").on("click", getQuote);
  $("#tweet-quote").on("click", function() {
    $("#tweet-quote").attr(
      "href",
      "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
        encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
    );
  });
});
