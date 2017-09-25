
$( "document" ).ready(function() {

  $( ".readmore" ).click(function() {
    $( "#show-this-on-click, .readless" ).slideDown( "slow", function() {
      // Animation complete.
    });
    $( ".readmore" ).hide( "slow", function() {
    });
  });


  $( ".readless" ).click(function() {
    $( "#show-this-on-click, .readless" ).slideUp( "slow", function() {
      // Animation complete.
      });
      $( ".readmore" ).show( "slow", function() {
      });
    });



  $( ".learnmore" ).click(function() {
    $( "#learnmoretext " ).slideDown( "slow", function() {
      // Animation complete.
    });
    $( ".learnmore" ).hide( "slow", function() {
    });
  });

  $("a").click(function(event){
      event.preventDefault();
  });

});
