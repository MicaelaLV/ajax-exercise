// index.js
function getPokemonInfo(id) {
  $.ajax({
    url: "http://pokeapi.co/api/v2/pokemon/" + id,
    method: "GET",
    success: function (response) {
    $('#pokeInfo').append(response.name);
      //console.log(response.name);
    },
    error: function (err) {
      console.log(err);
    },
  })
}

$("#pokeButton").on('click', function(){
  getPokemonInfo(150);
})
