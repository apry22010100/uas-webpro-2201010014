<!DOCTYPE html>
<html>
<head>
    <title>Tebak Gambar</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Tebak Gambar</h1>
        <div id="game">
            <img id="gambar" src="gambar_default.jpg" alt="Gambar">
            <input type="text" id="tebakan" placeholder="Tebak gambar...">
            <button onclick="tebak()">Tebak</button>
        </div>
        <div id="hasil"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
