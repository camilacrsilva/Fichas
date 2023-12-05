<?php 
    # Incluindo dados de PHP
    include_once ("./fichaIndex.php");
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
    <title>Personagem</title>    
    <link href="./style.css" rel="stylesheet">
</head>
<body>
    <?php 
        echo $construtor->CreateHTML()
        // echo phpinfo();
    ?>    
</body>
</html>

