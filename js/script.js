// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    $('gallery').empty();
    var searchTerm = $('#search-term').val();
    var url = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&rating=pg&api_key=dc6zaTOxFJmzC";
   // var email = $("#email")val();
    $.ajax({
        url: url,
        method: "GET",
        success: function(response){
            var randIndex = Math.floor(Math.random() * response.data.length);
            $('.gallery').html(
                '<div class="col-md-offset-4 col-md-4 thumb">\
                    <a class="thumbnail" href =' + response.data[randIndex].images.fixed_width.url + '>\
                        <img src=' + response.data[randIndex].images.fixed_width.url + '/>\
                    </a>\
                </div>'
            
            );
        },
    }); 
  
  
});

