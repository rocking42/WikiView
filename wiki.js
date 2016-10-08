$(document).ready(function() {
  $("#search").keydown("click", function(e) {
	 if (e.keyCode == 13) {
	 $("ul#list").html("");
	 $("div").fadeOut(1).removeClass("type").fadeIn("slow")
	 $("#head").hide();
	 $("ul").fadeOut().fadeIn(1000);

     var old = ""
     var input = $("#search").val();
     input = input.split(" ");
     old = input.join("+");
$.getJSON("https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=" + old + "&format=json&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max&callback=?", function(nice) {
   var stuff = [];
   if (nice && nice.query && nice.query.pages)
      var pages = nice.query.pages;
     for (var id in pages) {
        stuff.push(id)
     }
        for (var i = 0; i < stuff.length; i++) {
	        $("ul#list").append("<li class = 'text'>" + "<p class='yes'>" + (nice.query.pages[stuff[i]].title) + "</p>" + "</br>" + "<p class = 'done'>" + (nice.query.pages[stuff[i]].extract) + "</p>" + "</li>")
         }

  $("p.yes").on("click", function() {
	  var yum = ("https://en.wikipedia.org/wiki/" + $(this).text()) 
	  window.open(yum);
  })

});
   }
});
	$("#click").on("click", function(){
		$("#search").val("");
	})
})




