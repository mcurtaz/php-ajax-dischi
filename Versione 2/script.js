$(document).ready(init);

function init() {
  getAlbums();
}

function getAlbums() {
  $.ajax({
    url: "data.php",
    success: function(data){
      if (data["success"]) {
        var albums = data["response"];
        printAlbums(albums);
      }
    },
    error: function (err) {
      console.log("err", err);
    }
  });
};

function printAlbums(albums){
  var template = $("#template-handlebars").html();
  var target = $("#albums-container");
  var compiled = Handlebars.compile(template);

  target.text("");

  for (var i = 0; i < albums.length; i++) {
    var album = compiled(albums[i]);

    target.append(album);
  };
};
