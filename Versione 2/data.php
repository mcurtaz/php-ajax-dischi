<?php

  // questo file php sarà una risposta alla chiamata ajax sul file (url dell'ajax sarà localhost/data.php)
  header("Content-Type: application/json"); // riga nell'header obbligatoria per far capire al client cosa gli sto mandando

  require "db.php"; // importo il database dall'altro file php

  $author = $_GET["author"];
  $albums = $data["response"];
  $selectedAlbums = [
    "success" => true,
    "response" => [],
  ];

  if ($author == all) {
    echo json_encode($data); // trasforma l'array $data (che viene dal file php db.php) in un oggetto json e lo stampa in pagina (pagina che sarà la risposta che riceverà il client)
    return;
  } else {

    foreach ($albums as $album) {
      if ($album["author"] == $author) {
        $selectedAlbums["response"][] = $album;
      }
    }

    echo json_encode($selectedAlbums); // trasforma l'array $data (che viene dal file php db.php) in un oggetto json e lo stampa in pagina (pagina che sarà la risposta che riceverà il client)
    return;

  }

 ?>
