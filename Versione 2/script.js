$(document).ready(init);

function init() {
  getAlbums();
  addSelectListener();
}


function getAlbums() {
  // chiamata ajax sul file data.php che si trova sul server localohost (in questo caso per l'esercizio)

  var author = $("#author-select").val(); // salvo la variabile autore selezionato da mandare nell'ajax. Al caricamento della pagina la selezione di default è all

  $.ajax({
    url: "data.php",
    method: "GET",
    data: {
      "author": author,
    },
    success: function(data){
      //il jason di risposta avrà alla chiave success true se tutto è andato a buon fine e alla chiave response l'array con i dati degli album
      if (data["success"]) {
        var albums = data["response"]; // salvo l'array degli album nellla variabile
        printAlbums(albums);
      }
    },
    error: function (err) {
      console.log("err", err);
    }
  });
};

function printAlbums(albums){ // funzione che cicla su ogni album compila il template handlebars e lo stampa in pagina. Il template handlebars utilizzerà le stesse chiavi usate nell'array mandato dal server ("title", "author" ecc.)
  var template = $("#template-handlebars").html();
  var target = $("#albums-container");
  var compiled = Handlebars.compile(template);

  target.text("");

  for (var i = 0; i < albums.length; i++) {
    var album = compiled(albums[i]);

    target.append(album);
  };
};

function addSelectListener(){
  $("#author-select").change(getAlbums);
}
